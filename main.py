import uvicorn
import logging
import sys

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api.health_service import router as health_router
from backend.api.record_service import router as record_db_router
from config import STATIC_CONFIG

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(record_db_router)

logger = logging.getLogger()
logger.setLevel(logging.WARNING)
logger.addHandler(logging.StreamHandler(stream=sys.stdout))


if __name__ == "__main__":
    logger.info("Starting application")
    uvicorn.run(app, host='0.0.0.0', port=STATIC_CONFIG["backend_port"], log_level="info", forwarded_allow_ips="*")
