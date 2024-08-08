// Bee Flying Animation
function makeBeeFly() {
    bee_static.src = 'images/bee-gif.gif';
}

function makeBeeStop() {
    bee_static.src = 'images/static-bee.png';
}

const bee_static = document.querySelector('.bee-gif');
bee_static.addEventListener('mouseover', makeBeeFly);
bee_static.addEventListener('mouseleave', makeBeeStop);
//



// Shopping Filter

const honeysSold = [
    // https://www.gorawhoney.com/product-category/raw-clover-honey/
    {
        "Color": "extra-light-amber",
        "Name": "Queen Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 48,
        "Price ($)": 35.99,
        img: "images/rawclove-removebg-preview.png",
        href: "https://www.gorawhoney.com/product-category/raw-clover-honey/"
    },
    {
        "Color": "extra-light-amber",
        "Name": "Whole Hive Bulk Raw Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 192,
        "Price ($)": 76.99,
        img: "images/bulk-raw-honey.jpg",
        href: "https://www.gorawhoney.com/product/whole-hive-1-gallon-pure-raw-clover-honey/"
    },
    // https://goldengirlshoneyandhives.com/product/fireweed-honey/
    {
        "Color": "white",
        "Name": "Pacific Northwest Fireweed Honey",
        "Company": "Golden Girls Honey",
        "Size (oz)": 13,
        "Price ($)": 16.00,
        img: "images/fireweed-removebg-preview.png",
        href: "https://goldengirlshoneyandhives.com/product/fireweed-honey/"
    }, 
    // https://www.gorawhoney.com/product/wildflower-varietal-raw-honey-queen-bee-3lb/
    {
        "Color": "dark-amber",
        "Name": "Wildflower Varietal Raw Honey Queen Bee",
        "Company": "Go Raw Honey",
        "Size (oz)": 48,
        "Price ($)": 37.99,
        img: "images/Wildflower-QueenBee-800px-COMP-removebg-preview.png",
        href: "https://www.gorawhoney.com/product/wildflower-varietal-raw-honey-queen-bee-3lb/"
    },
    // https://www.smileyhoney.com/products/sourwood-honey
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size (oz)": 15,
        "Price ($)": 16.50,
        img: "images/15-oz-sourwood-honey.png",
        href: "https://www.smileyhoney.com/products/sourwood-honey?variant=6737072881694",
    },
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size (oz)": 16,
        "Price ($)": 16.00,
        img: "images/16-oz-sour-wood-honey.png",
        href: "https://www.smileyhoney.com/products/sourwood-honey?variant=32984086152",
    },
    // https://www.gorawhoney.com/product/baby-bee-12oz-pure-raw-clover-honey/
    {
        "Color": "extra-light-amber",
        "Name": "Baby Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 12,
        "Price ($)": 19.99,
        img: "images/Water_White_Honey-removebg-preview.png",
        href: "https://www.gorawhoney.com/product/baby-bee-12oz-pure-raw-clover-honey/",
    },
    //
    {
        "Color": "extra-light-amber",
        "Name": "Honey Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 24,
        "Price ($)": 24.99,
        img: "images/last_Honey-Bee-OnWhite-removebg-preview.png",
        href: "https://www.gorawhoney.com/product/honey-bee-24oz-pure-raw-clover-honey/",
    },
];

// Types: Name, Size (oz), Price ($)
function sortBy (type, biggerAtTop) {
    if (biggerAtTop) {
        honeysSold.sort((a, b) => {
            return b[type] - a[type];
        })
    }
    else {
        honeysSold.sort((a, b) => {
            return a[type] - b[type];
        })
    }
    makeShoppingContent(honeysSold);
}

function textSortBy(type, AToZ) {
    if (AToZ) {
        honeysSold.sort((a, b) => {
            return a[type].localeCompare(b[type]);
        })
    }
    else {
        honeysSold.sort((a, b) => {
            return b[type].localeCompare(a[type]);
        })
    }
    makeShoppingContent(honeysSold);
}
//

// Color filter
function filterColor(colorWanted) {
    let filteredHoneys = honeysSold.filter((honey) => {
        honey["Color"] === colorWanted;
    })
    makeShoppingContent(filteredHoneys);
}   
//

// Put shopping items on the webpage 
const container = document.querySelector('.shopping-container');
function makeShoppingContent(honeysSoldList) {
    container.innerHTML = "";
    honeysSoldList.forEach(function (honeyItem){
        container.innerHTML += 
        `<div class="item">
            <img src=${honeyItem["img"]} alt=${honeyItem["Name"]}>
            <p>${honeyItem["Name"]}<br>${honeyItem["Size (oz)"]} oz.</p>
            <p>Price: ${honeyItem["Price ($)"].toLocaleString("en-US", {style:"currency", currency: "USD"})}</p> 
            <a href=${honeyItem["href"]} class="shopping-link" target="_blank">Shop Now</a>
        </div>`
    });
}

makeShoppingContent(honeysSold); 

// Use filter/sorting buttons
const priceSort = document.getElementById('price-sort');
const sizeSort = document.getElementById('size-sort');
const colorSort = document.getElementById('color-sort');
const nameSort = document.getElementById('name-sort');

priceSort.addEventListener('click', sortBy("Price ($)", true));