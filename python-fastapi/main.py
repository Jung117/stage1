from fastapi import FastAPI

app = FastAPI()     # FastAPI物件

# 建立網站首頁
@app.get("/")
def index():
    return {"x": 3, "y": 4}

# 啟動server > uvicorn {檔案名稱: 物件名稱 --reload}
# " uvicorn main:app --reload "
# --reload: 更新檔案後會自動載入更新