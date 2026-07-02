# 準備 DB 連線
import mysql.connector
con = mysql.connector.connect(
    user = "root",
    password = "0000",
    host = "localhost",
    database = "fastapi"
)
print("Database Ready!")

# 準備網站後端系統
import json
from typing import Annotated
from fastapi import FastAPI, Body
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# 把目前資料夾掛載成靜態檔案來源
app.mount("/static", StaticFiles(directory="."), name="static")

# 建立後端 RESTful APIs





@app.get("/createMessage")
def createMessage (
    author: Annotated[str, None],
    content: Annotated[str, None]
):
    # 利用已建立的 DB 連線對 DB 下 SQL 指令
    cursor = con.cursor()
    cursor.execute(
        "INSERT INTO message(author, content) VALUES (%s, %s)",
        [author, content]
    )
    con.commit()
    return {"OK": True}

@app.get("/")
def home():
    return FileResponse("index.html")
