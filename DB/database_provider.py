from DB.database_engine import RecordRepository

repo_instance = None


def get_repository():
    global repo_instance

    if repo_instance is None:
        repo_instance = RecordRepository()

    return repo_instance
