console.log(document.getElementById("loginForm"));
// Alert dialog for checkbox
document.getElementById("loginForm").addEventListener("submit", function (e) {
    const checkbox = document.getElementById("agree");

    if (!checkbox.checked) {
        e.preventDefault();
        alert("請勾選同意條款");
    }
});
