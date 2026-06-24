// Pop-up menu
const hamMenu = document.getElementById('hamMenu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// Add additional attributes to menu and overlay on hamburger menu click
hamMenu.addEventListener('click', () => {
    menu.classList.add('menuOpen');
    overlay.classList.add('overlayActive');
});

// Close the popup menu by clicking the close icon
closeBtn.addEventListener('click', () => {
    menu.classList.remove('menuOpen');
    overlay.classList.remove('overlayActive');
});



// Task 3
const attrInfo = await fetch("https://cwpeng.github.io/test/assignment-3-1");
const attrPic = await fetch("https://cwpeng.github.io/test/assignment-3-2");

const info = await attrInfo.json();
const pic = await attrPic.json();

const attrInfoPic = new Map();

// Fetch name for each attraction
info.rows.forEach(attr => {

    attrInfoPic.set(attr.serial, [attr.sname]);
});

// Fetch picture for each attraction
pic.rows.forEach(attr => {
    let firstImage = attr.pics.match(/\/resources\/images\/[^\/]+\.jpg/)[0];
    attrInfoPic.get(attr.serial).push(pic.host + firstImage);
});

// Convert map into a list for rendering attraction info
const attrList = [...attrInfoPic];

// Render attraction info
for (let i = 1; i < 14; i++) {
    
    if (i < 4) {
        
        let imgBlock = document.getElementById("img"+i);
        imgBlock.src = attrList[i-1][1][1];
        let title = imgBlock.nextElementSibling;
        title.textContent = attrList[i-1][1][0];
    } else {
        console.log(i);
        let divBlock = document.getElementById("div"+(i-3));
        divBlock.style.backgroundImage =  `url('${attrList[i][1][1]}')`;
        // console.log(divBlock);
        console.log(attrList[i][1][1]);
        let title = divBlock.children[1];
        title.textContent = attrList[i-1][1][0];
    }
}



