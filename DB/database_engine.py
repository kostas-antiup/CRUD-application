from datetime import datetime

from sqlalchemy import create_engine, Column, String, Float, DateTime, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from config import STATIC_CONFIG

Base = declarative_base()


class RecordModel(Base):
    __tablename__ = "records"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    artist = Column(String, index=True)
    price = Column(Float)
    genre = Column(String)
    description = Column(String)
    release_date = Column(DateTime, default=datetime.utcnow)
    stock = Column(Integer, default=1)


engine = create_engine(
    STATIC_CONFIG.get("DATABASE_URL", f'sqlite:///{STATIC_CONFIG["db_path"]}'),
    connect_args={"check_same_thread": False} if "sqlite" in STATIC_CONFIG.get("DATABASE_URL", "") else {}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)


class RecordRepository:
    def __init__(self):
        pass

    def create(self, record):
        try:
            with SessionLocal() as db:
                db_record = RecordModel(**record.dict())
                db.add(db_record)
                db.commit()
                db.refresh(db_record)
                return db_record
        except Exception as e:
            print(f"Create error: {e}")
            raise

    def get_all(self):
        try:
            with SessionLocal() as db:
                return db.query(RecordModel).all()
        except Exception as e:
            print(f"Get all error: {e}")
            return []

    def get_by_id(self, record_id: str):
        try:
            with SessionLocal() as db:
                return db.query(RecordModel).filter(RecordModel.id == record_id).first()
        except Exception as e:
            print(f"Get by ID error: {e}")
            return None

    def update(self, record_id: str, record):
        try:
            with SessionLocal() as db:
                # Query within the same session
                db_record = db.query(RecordModel).filter(RecordModel.id == record_id).first()

                if db_record:
                    for key, value in record.dict(exclude_unset=True).items():
                        setattr(db_record, key, value)

                    db.commit()
                    db.refresh(db_record)

                return db_record
        except Exception as e:
            print(f"Update error: {e}")
            raise

    def delete(self, record_id: str):
        try:
            with SessionLocal() as db:
                # Query within the same session
                db_record = db.query(RecordModel).filter(RecordModel.id == record_id).first()

                if db_record:
                    db.delete(db_record)
                    db.commit()

                return db_record
        except Exception as e:
            print(f"Delete error: {e}")
            raise

    def __del__(self):
        pass
