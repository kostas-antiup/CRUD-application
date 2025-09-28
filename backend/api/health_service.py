from fastapi.responses import JSONResponse
from fastapi import APIRouter

router = APIRouter()


@router.get("/health", response_model=dict)
async def get_health():
    return JSONResponse(content={
        "status": "OK"
    })
