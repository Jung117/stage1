from fastapi import FastAPI, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from urllib.parse import quote

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


# index.html
@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse(
        request = request, name = "index.html", context = {}
    )


@app.post("/login")
async def login(request: Request, email, pwd):
    
        if email == "abc@abc.com" and pwd == "abc":
            return RedirectResponse(url="/member")
        else:
            error_msg = quote("輸入錯誤")
            return RedirectResponse(url = f"/ohoh?msg={error_msg}")
        


# member.html
@app.get("/member")
async def member(request: Request):
    return templates.TemplateResponse(
        request = request, name = "member.html", context = {}
    )
            


# Logout.html
@app.get("/logout")
async def logout(request):
    return templates.TemplateResponse(
            "logout.html",
            {"request": request}
    )