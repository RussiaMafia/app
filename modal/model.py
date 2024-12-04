from pydantic import BaseModel


class Attributes(BaseModel):
    text: str

class Url(BaseModel):
    url:str
    
