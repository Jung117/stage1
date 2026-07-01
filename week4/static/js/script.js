/* Task 1: Login processing */

// Alert dialog for checkbox
const loginForm = document.getElementById("loginForm");

if (loginForm) {    // Only valid when in index.html
    loginForm.addEventListener("submit", function (e) {
        const checkbox = document.getElementById("agree");

        // Check if the box is checked
        if (!checkbox.checked) {
            e.preventDefault();
            alert("請勾選同意條款");
        }
    });
}



/* Task 4: Hotel search */

// Check if the input is valid and alert the user if it isn't
const hotelForm = document.getElementById("hotelForm");

if (hotelForm) {    // Only valid when in index.html
    hotelForm.addEventListener("submit", function (e) {
        const hotelInput = document.getElementById("hotel_num");

        // Check if the input is postive integer
        if (!/^[1-9]\d*$/.test(hotelInput.value)) {
            e.preventDefault();
            alert("請輸入正整數");
        }
    });
}



/**
 * Retrieve hotel data and present it on the hotel.html
 */
async function getHotel() {

    // Hotel sources
    const hotelCn = await fetch('https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-ch');
    const hotelEng = await fetch('https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-en');
    
    // Parse hotel info into JSON objects
    const dataCn = await hotelCn.json();
    const dataEng = await hotelEng.json();


    /* Start porcessing data and store in a dict object */
    const hotelInfo = {};   // { 'id' : [Chinese name, English name, Phone number] }

    // Use id as key in hotelInfo and storing Chinese name as value
    dataCn.list.forEach(hotel => {
        if (!(hotel["_id"] in hotelInfo)) {
            hotelInfo[hotel["_id"]] = [[hotel['旅宿名稱']]];
        }
    })

    // Add English name and phone number to the corresponding entry in hotelInfo
    dataEng.list.forEach(hotel => {
        // In case hotel is missed out in the Chinese hotel data
        if (!hotelInfo[hotel["_id"]]) {
            hotelInfo[hotel["_id"]] = [];
        }

        hotelInfo[hotel["_id"]].push(hotel['hotel name']);
        hotelInfo[hotel["_id"]].push(hotel["tel"]);
    })


    /* Get user input for hotel id */
    console.log("Start: ")
    const hotel_num = document.getElementById("hotel_num").value;
    
    let response = await fetch(
        "/hotel/" + hotel_num,
        {
            method: "GET"
        }
    );
    let data = await response.json();
    console.log(data)

    
}
