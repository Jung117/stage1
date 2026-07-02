
// 新增留言
async function postMessage() {
    let response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({"author": "jung", "content": "Test"})
    });

    let result = await response.json();
    console.log(result);
}

// 取得留言
async function getMessages() {
    let response = await fetch("/api/message", {
        method: "GET"
    });

    let result = await response.json();
    console.log(result);
}

// 刪除留言
async function deleteMessage() {
    let response = await fetch("/api/message", {
        method: "DELETE"
    });

    let result = await response.json();
    console.log(result);
}

getMessages();