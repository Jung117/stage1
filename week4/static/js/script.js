// // Login processing
// // Alert dialog for checkbox
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     const checkbox = document.getElementById("agree");

//     // Check if the box is checked
//     if (!checkbox.checked) {
//         e.preventDefault();
//         alert("請勾選同意條款");
//     }
// });



// // Hotel info processing

// // Check if the input is valid and alert the user if it isn't
// document.getElementById("hotelForm").addEventListener("submit", function (e) {
    
//     const hotelInput = document.getElementById("hotel_num");

//     // Check if the input is postive integer
//     if (!/^[1-9]\d*$/.test(hotelInput.value)) {
//         e.preventDefault();
//         alert("請輸入正整數");
//     }
// });


// Parsing JSON

// Hotel sources
const hotel_cn_href = await fetch('https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-ch');
const hotel_eng_href = await fetch('https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-en');

const hotel_cn = await hotel_cn_href.json();
const hotel_eng = await hotel_eng_href.json();

// console.log(Object.keys(hotel_cn));
// console.log(hotel_cn);


const hotel_info = new Map(); // { 'id' : [Chinese name, English name, Phone number] }
hotel_cn.list.forEach(hotel => {
    if (!hotel_info.get(hotel["_id"])) {
        hotel_info.set(hotel["_id"], [hotel['旅宿名稱']]);
    }
})

hotel_eng.list.forEach(hotel => {
    hotel_info.get(hotel["_id"]).push(hotel['hotel name']);
    hotel_info.get(hotel["_id"]).push(hotel["tel"]);
})

console.log(hotel_info.get(216));
