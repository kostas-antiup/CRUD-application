from fastapi import HTTPException, Depends
from typing import List
from fastapi import APIRouter

from DB.database_engine import RecordRepository
from DB.database_provider import get_repository
from backend.utility.record import Record

router = APIRouter()


@router.post("/records/", response_model=Record)
async def create_record(record: Record, repo: RecordRepository = Depends(get_repository)):
    return repo.create(record)


@router.get("/records/", response_model=List[Record])
async def read_records(repo: RecordRepository = Depends(get_repository)):
    return repo.get_all()


@router.get("/records/{record_id}", response_model=Record)
async def read_record(record_id: str, repo: RecordRepository = Depends(get_repository)):
    record = repo.get_by_id(record_id)

    if record is None:
        raise HTTPException(status_code=404, detail="Record not found")

    return record


@router.put("/records/{record_id}", response_model=Record)
async def update_record(record_id: str, record: Record, repo: RecordRepository = Depends(get_repository)):
    updated_record = repo.update(record_id, record)

    if updated_record is None:
        raise HTTPException(status_code=404, detail="Record not found")

    return updated_record


@router.delete("/records/{record_id}", response_model=dict)
async def delete_record(record_id: str, repo: RecordRepository = Depends(get_repository)):
    deleted_record = repo.delete(record_id)

    if deleted_record is None:
        raise HTTPException(status_code=404, detail="Record not found")

    return {"message": "Record deleted successfully"}
