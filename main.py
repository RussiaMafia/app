from typing_extensions import Any
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File
import httpx
from io import BytesIO

from modal.model import Attributes, Url

origins = [
    "http://localhost:5173",  # Разрешите доступ с вашего клиентского приложения
    "http://127.0.0.1:5173",  # Другой вариант для локального хоста
    # Добавьте другие источники, если необходимо
]



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Разрешенные источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы
    allow_headers=["*"],  # Разрешить все заголовки
)

API_KEY: str = "94924e52b85d8c9e010a050699c0fe4feba7504a4d85cbd633cf1b5196d2df9e"

@app.get("/")
async def head():
    return{"helo":"ff"}

@app.post("/url/")
async def upload_url(url:Url):
    resp=await post_url(url=url.url)
    return {"relult":resp}
    
@app.get("/url/{id}")
async def get_url_info(id:str):
    resp=await fetch_file_info(id)
    return {"relult":resp}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    content = await file.read()
    # Сохраняем файл на диск
    with open(f"uploads/{file.filename}", "wb") as f:
        f.write(content)
    # Используем BytesIO для передачи содержимого файла
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

    async with httpx.AsyncClient() as client:
        response = await client.post(url, files=files, headers=headers)
    return response


async def fetch_file_info(id: str) -> Any:
    url = f"https://www.virustotal.com/api/v3/analyses/{id}"
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    return response.json()


async def fetch_comments(id: str, limit: int) -> Any:
    url = f"https://www.virustotal.com/api/v3/files/{id}?limit={limit}"
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,
    }

    async with httpx.AsyncClient() as client:
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

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload, headers=headers)

    return response.json()

async def post_url(url:str):
    url = "https://www.virustotal.com/api/v3/urls"
    payload = { "url": url }
    headers = {
        "accept": "application/json",
        "x-apikey": API_KEY,  # Замените "key" на ваш реальный API-ключ
        "content-type": "application/x-www-form-urlencoded"
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, data=payload, headers=headers)

    return response.json()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
