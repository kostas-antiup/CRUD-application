from datetime import datetime
from pydantic import BaseModel


class Record(BaseModel):
    id: str
    name: str
    artist: str
    price: float
    genre: str
    description: str
    release_date: datetime
    stock: int

    class Config:
        orm_mode = True
