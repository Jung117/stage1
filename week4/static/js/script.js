// Login processing
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

// Check if the input is valid and alert the user if it isn't
document.getElementById("hotelForm").addEventListener("submit", function (e) {
    
    const hotelInput = document.getElementById("hotel_num");

    // Check if the input is postive integer
    if (!/^[1-9]\d*$/.test(hotelInput.value)) {
        e.preventDefault();
        alert("請輸入正整數");
    }
});


// Parsing JSON

// Hotel sources
const hotel_cn = await fetch('https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-ch');
const hotel_eng = await fetch('https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-en');
