// Pop-up menu
// const hamMenu = document.getElementById('hamMenu');
// const menu = document.getElementById('menu');
// const overlay = document.getElementById('overlay');
// const closeBtn = document.getElementById('closeBtn');

// // Add additional attributes to menu and overlay on hamburger menu click
// hamMenu.addEventListener('click', () => {
//     menu.classList.add('menuOpen');
//     overlay.classList.add('overlayActive');
// });

// // Close the popup menu by clicking the close icon
// closeBtn.addEventListener('click', () => {
//     menu.classList.remove('menuOpen');
//     overlay.classList.remove('overlayActive');
// });



// API
const attrInfo = await fetch("https://cwpeng.github.io/test/assignment-3-1");
const attrPic = await fetch("https://cwpeng.github.io/test/assignment-3-2");

const info = await attrInfo.json();
const pic = await attrPic.json();

const attrInfoPic = {};

// Fetch name for each attraction
// info.rows.forEach(item => {
//     console.log(item.serial);
//     console.log(item.sname);
// });

// Fetch picture for each attraction
pic.rows.forEach(item => {
    console.log(item.serial);
    let firstImage = item.pics.match(/\/resources\/images\/[^\/]+\.jpg/)[0]
    console.log(firstImage);
});



