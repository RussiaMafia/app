from io import BytesIO
import os
from typing import Annotated, List
from typing_extensions import Any
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import mapped_column, declarative_base, Mapped
from sqlalchemy import ForeignKey, JSON, String, Integer, Text, TIMESTAMP, LargeBinary
from sqlalchemy.sql import func
from fastapi import FastAPI, Depends, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio.session import async_sessionmaker
from modal.model import Attributes, Url
from httpx import AsyncClient

DATABASE_URL = os.getenv(
    "DATABASE_URL", "postgresql+asyncpg://user:mysecretpassword@192.168.3.3:5432/dbname"
)

engine = create_async_engine(DATABASE_URL)
AsyncSessionLocal = async_sessionmaker(expire_on_commit=False)
Base = declarative_base()


# Define the User model
class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    created_at: Mapped[str] = mapped_column(TIMESTAMP, server_default=func.now())


# Define the URL model
class URL(Base):
    __tablename__ = "urls"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    url: Mapped[str] = mapped_column(String(255), nullable=False)
    result: Mapped[dict] = mapped_column(JSON, nullable=False)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))


# Define the File model
class FileModel(Base):
    __tablename__ = "files"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    filename: Mapped[str] = mapped_column(String(255), nullable=False)
    content: Mapped[bytes] = mapped_column(
        LargeBinary, nullable=False
    )  # Specify LargeBinary
    response: Mapped[dict] = mapped_column(JSON, nullable=False)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))


# Define the FileInfo model
class FileInfo(Base):
    __tablename__ = "file_info"
    id: Mapped[str] = mapped_column(String(255), primary_key=True)
    info: Mapped[dict] = mapped_column(JSON, nullable=False)
    file_id: Mapped[int] = mapped_column(Integer, ForeignKey("files.id"))


# Define the Comment model
class Comment(Base):
    __tablename__ = "comments"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    file_id: Mapped[int] = mapped_column(Integer, ForeignKey("files.id"))
    text: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(50), nullable=False)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))


app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Разрешенные источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы
    allow_headers=["*"],  # Разрешить все заголовки
)


async def get_db():
    async with AsyncSessionLocal() as session:
        yield session


SessionDep = Annotated[AsyncSession, Depends(get_db)]


@app.post("/startup")  # Added leading slash
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    return {"ok": True}


API_KEY: str = "94924e52b85d8c9e010a050699c0fe4feba7504a4d85cbd633cf1b5196d2df9e"


@app.get("/")
async def head():
    return {"helo": "ff"}


@app.post("/url/")
async def upload_url(url: Url, sesion: SessionDep):
    resp = await post_url(url=url.url)
    return {"relult": resp}


@app.get("/url/{id}")
async def get_url_info(id: str):
    resp = await fetch_file_info(id)
    return {"relult": resp}


@app.post("/uploadfile/")
async def create_upload_file(session: SessionDep, file: UploadFile = File(...)):
    content = await file.read()
    with open(f"uploads/{file.filename}", "wb") as f:
        f.write(content)
    file_stream = BytesIO(content)
    resp = await upload_file(file_stream, file.filename)

    return {"filename": file.filename, "response": resp.json()}


@app.get("/get_info/{id}")
async def get_info(id: str):
    print(id)
    resp = await fetch_file_info(id)
    return {"info": resp}


@app.get("/get_comments/{id}?limit={limit}")
async def get_comments(id: str, limit: int):
    resp = await fetch_comments(id, limit)
    return {"comments": resp}


@app.post("/post_comments/{id}")
async def post_comments(id: str, comment: Attributes):
    print(comment)
    resp = await post_comment(id, comment)
    return {"status": resp}


async def upload_file(file_stream, file_name):
    url = "https://www.virustotal.com/api/v3/files"
    files = {"file": (file_name, file_stream, "text/plain")}
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,
    }

    async with AsyncClient() as client:
        response = await client.post(url, files=files, headers=headers)
    return response


async def fetch_file_info(id: str) -> Any:
    url = f"https://www.virustotal.com/api/v3/analyses/{id}"
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,
    }
    async with AsyncClient() as client:
        response = await client.get(url, headers=headers)
    return response.json()


async def fetch_comments(id: str, limit: int) -> Any:
    url = f"https://www.virustotal.com/api/v3/files/{id}?limit={limit}"
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,
    }

    async with AsyncClient() as client:
        response = await client.get(url, headers=headers)

    return response.json()


async def post_comment(id: str, text_comment: Attributes):
    url = f"https://www.virustotal.com/api/v3/files/{id}/comments"

    payload = {"data": {"type": "comment", "attributes": {"text": text_comment.text}}}
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,
        "content-type": "application/json",
    }

    async with AsyncClient() as client:
        response = await client.post(url, json=payload, headers=headers)

    return response.json()


async def post_url(url: str):
    url = "https://www.virustotal.com/api/v3/urls"
    payload = {"url": url}
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,  # Замените "key" на ваш реальный API-ключ
        "content-type": "application/x-www-form-urlencoded",
    }

    async with AsyncClient() as client:
        response = await client.post(url, data=payload, headers=headers)

    return response.json()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
