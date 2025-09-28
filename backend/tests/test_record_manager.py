from fastapi import FastAPI
from fastapi.testclient import TestClient
from backend.api.record_service import router as record_db_router

app = FastAPI()
app.include_router(record_db_router)

client = TestClient(app)

test_record = {
    "id": "1",
    "name": "Test Record",
    "artist": "Test Artist",
    "price": 9.99,
    "genre": "House",
    "description": "A test record description",
    "release_date": "2023-01-01T00:00:00",
    "stock": 5,
}

updated_test_record = {
    "id": "1",
    "name": "Test Record",
    "artist": "Test Artist",
    "price": 99.99,
    "genre": "House",
    "description": "A test record description",
    "release_date": "2023-01-01T00:00:00",
    "stock": 10,
}


def test_create_record():
    response = client.post("/records/", json=test_record)

    assert response.status_code == 200
    assert response.json() == test_record


def test_create_record_missing_fields():
    response = client.post("/records/", json={"name": "Incomplete Record"})

    assert response.status_code == 422


def test_read_records():
    response = client.get("/records/")

    assert response.status_code == 200
    assert len(response.json()) > 0


def test_create_record_invalid_price():
    response = client.post("/records/", json={
        "id": "2",
        "name": "Invalid Record",
        "artist": "Invalid Artist",
        "price": "invalid",
        "genre": "House",
        "description": "A record with invalid price",
        "release_date": "2023-01-01T00:00:00",
        "stock": 5,
    })

    assert response.status_code == 422


def test_read_record():
    response = client.get("/records/1")

    assert response.status_code == 200
    assert response.json() == test_record


def test_read_nonexistent_record():
    response = client.get("/records/999")

    assert response.status_code == 404
    assert response.json() == {"detail": "Record not found"}


def test_update_record():
    response = client.put("/records/1", json=updated_test_record)

    assert response.status_code == 200
    assert response.json() == updated_test_record


def test_update_nonexistent_record():
    response = client.put("/records/999", json=updated_test_record)

    assert response.status_code == 404
    assert response.json() == {"detail": "Record not found"}


def test_delete_record():
    response = client.delete("/records/1")

    assert response.status_code == 200
    assert response.json() == {"message": "Record deleted successfully"}


def test_delete_nonexistent_record():
    response = client.delete("/records/999")

    assert response.status_code == 404
    assert response.json() == {"detail": "Record not found"}