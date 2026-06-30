// Alert dialog for checkbox
document.getElementById("loginForm").addEventListener("submit", function (e) {
    const checkbox = document.getElementById("agree");

    // Check if the box is checked
    if (!checkbox.checked) {
        e.preventDefault();
        alert("請勾選同意條款");
    }
});

// Hotel info processing
document.getElementById("hotelForm").addEventListener("submit", function (e) {
    
    const hotelInput = document.getElementById("hotel_num");

    // Check if the input is postive integer
    if (!/^[1-9]\d*$/.test(hotelInput.value)) {
        e.preventDefault();
        alert("請輸入正整數");
    }
});