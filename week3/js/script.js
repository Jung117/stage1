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
const attrInfo = await fetch('https://cwpeng.github.io/test/assignment-3-1');
const attrPic = await fetch('https://cwpeng.github.io/test/assignment-3-2');

const info = await attrInfo.json();
const pic = await attrPic.json();

const attrInfoPic = new Map();  // { 'serial number' : [name, first photo] }

// Fetch name for each attraction
info.rows.forEach(attr => {

    attrInfoPic.set(attr.serial, [attr.sname]);
});

// Fetch picture for each attraction
pic.rows.forEach(attr => {
    let firstImage = attr.pics.match(/\/resources\/images\/[^\/]+\.jpg/)[0];
    attrInfoPic.get(attr.serial).push(pic.host + firstImage);
});


const attrList = [...attrInfoPic];  // Convert map into a list for rendering attraction info

// Render attraction title and Picture
for (let i = 1; i < 14; i++) {
    
    if (i < 4) {
        // Render attration in Bar 1 - 3
        let imgBlock = document.getElementById('img' + i);
        imgBlock.src = attrList[i-1][1][1];
        let title = imgBlock.nextElementSibling;
        title.textContent = attrList[i-1][1][0];
    } else {
        // Render attration in Content Block 1 - 10
        let divBlock = document.getElementById('div' + (i-3));
        divBlock.style.backgroundImage =  `url('${attrList[i-1][1][1]}')`;
        let title = divBlock.children[1];
        title.textContent = attrList[i-1][1][0];
    }
}



// Task 4
console.log('Attr Num: '+ attrList.length);
let attrBlockNum = 13;
const loadMoreBtn = document.getElementById('loadBtn');

// Check if there is more un-present attraction in attrList
if (attrBlockNum < attrList.length) {
    loadMoreBtn.style.display = 'block';
}


// Parent div to be appended
const mainContent =  document.querySelector('.mainContent');

/**
 * Create new content blocks for more attractions
 * @param {int} attrNum: Number of attraction divs to be created
 */
function createAttrDiv(attrNum) {
    // Create new contentBlocks for loading more attrations
    const contentBlocks = document.createElement('div');
    contentBlocks.className = 'contentBlocks';

    // Create new attraction divs
    for (let i = 1; i <= attrNum; i++) {
        const attrDiv = document.createElement('div');
        attrDiv.className = 'block cb' + i;
        attrDiv.id = 'div' + (attrBlockNum - 3 + i);
        contentBlocks.appendChild(attrDiv);

        const divBtn = document.createElement('button');
        divBtn.className = 'star';
        contentBlocks.appendChild(divBtn);

        const divTitle = document.createElement('div');
        divtitle.textContent = attrList[attrBlockNum + i][1][0];
        contentBlocks.appendChild(divTitle);
        
    }
    mainContent.appendChild(contentBlocks);
}

function loadMore() {
    let attrNum = (attrList.length - attrBlockNum) < 10 ? attrList.length - attrBlockNum : 10;
    
    createAttrDiv(attrNum);

    // Update attraction Num

    // Update load more button
}

loadMoreBtn.addEventListener('click', loadMore);