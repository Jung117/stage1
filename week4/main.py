from fastapi import FastAPI, Form, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.sessions import SessionMiddleware



app = FastAPI()
app.mount("/static", StaticFiles(directory = "static"), name = "static")
templates = Jinja2Templates(directory = "templates")
# Session
app.add_middleware(SessionMiddleware, secret_key = "wehelp-week4-secret-key")


# index.html
@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse(
        request = request, name = "index.html", context = {}
    )


@app.post("/login")
async def login(request: Request, email: str = Form(...), pwd: str = Form(...)):
    
        if email == "abc@abc.com" and pwd == "abc":
            request.session["logged_in"] = True
            return RedirectResponse(url = "/member", status_code = 303)
        else:
            # 自訂的錯誤訊息
            msg = "帳號或密碼輸入錯誤"
            return RedirectResponse(
                url = f"/ohoh?msg={msg}", status_code = 303)
        

# member.html
@app.get("/member")
async def member(request: Request):
    return templates.TemplateResponse(request, "member.html")


# ohoh.html
@app.get("/ohoh")
async def error_msg(request: Request, msg: str = ""):
    return templates.TemplateResponse(request, "ohoh.html", {"msg": msg})


# Logout.html
@app.get("/logout")
async def logout(request: Request):
    pass


@app.get("/hotel/{id}")
async def get_hotel(request: Request, id: str):
    pass
    # return templates.TemplateResponse(
    #     request=request, name="item.html", context={"id": id}
    # )