import os
from pathlib import Path

ROOT_DIR = Path(__file__).parent

STATIC_CONFIG = {
    "db_path": ROOT_DIR / 'record_library.db',
    "backend_port": int(os.getenv("PORT", 8033)),
}
