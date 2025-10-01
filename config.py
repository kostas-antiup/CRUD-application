import os
from pathlib import Path

ROOT_DIR = Path(__file__).parent

STATIC_CONFIG = {
    "DATABASE_URL": os.getenv("DATABASE_URL"),
    "db_path": "records.db",
}
