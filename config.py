import os
from pathlib import Path

ROOT_DIR = Path(__file__).parent

STATIC_CONFIG = {
    "DATABASE_URL": os.getenv("DATABASE_URL"),
    "db_path": "records.db",
    "backend_port": int(os.getenv("PORT", 8033)),
}
