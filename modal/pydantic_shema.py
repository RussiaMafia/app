from pydantic import BaseModel


class Links(BaseModel):
    self: str


class Data(BaseModel):
    type: str
    id: str
    links: Links


class Response(BaseModel):
    data: Data


class FileResult(BaseModel):
    filename: str
    response: Response
