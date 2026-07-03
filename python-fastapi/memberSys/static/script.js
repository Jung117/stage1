// 註冊帳號
async function signup() {
    let response = await fetch("/api/member", {
        method: "POST", 
        // 壓成字串傳出去
        body: JSON.stringify({"name": "ply", "email": "ply@ply.com", "password": "ply"})
    })
    // response = 這次 HTTP 回應的物件 (包含了狀態碼(status)、標頭(headers)、以及尚未解析的回應內容)
    // 後端傳回來的 HTTP 回應內容,解析成 JavaScript 可以直接操作的物件,
    let result = await response.json();
    console.log("註冊結果", result);
}


// 登入帳號
async function signin() {
    let response = await fetch("/api/member/auth", {
        method: "PUT",
        body: JSON.stringify({"email": "ply@ply.com", "password": "ply"})
    })
    let result = await response.json();
    console.log("登入結果", result);
}


// 檢查登入狀態
async function checkStatus() {
    let response = await fetch("/api/member/auth", {
        method: "GET",
    });
    let result = await response.json();
    console.log("登入狀態是", result);
}