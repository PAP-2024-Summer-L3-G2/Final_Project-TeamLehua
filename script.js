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
        "Size(oz)": 48,
        "Price($)": 35.99,
        img: "images/rawclove-removebg-preview.png",
        href: "https://www.gorawhoney.com/product-category/raw-clover-honey/"
    },
    {
        "Color": "extra-light-amber",
        "Name": "Whole Hive Bulk Raw Honey",
        "Company": "Go Raw Honey",
        "Size(oz)": 192,
        "Price($)": 76.99,
        img: "images/bulk-raw-honey.png",
        href: "https://www.gorawhoney.com/product/whole-hive-1-gallon-pure-raw-clover-honey/"
    },
    // https://goldengirlshoneyandhives.com/product/fireweed-honey/
    {
        "Color": "white",
        "Name": "Pacific Northwest Fireweed Honey",
        "Company": "Golden Girls Honey",
        "Size(oz)": 13,
        "Price($)": 16.00,
        img: "images/fireweed-removebg-preview.png",
        href: "https://goldengirlshoneyandhives.com/product/fireweed-honey/"
    }, 
    // https://www.gorawhoney.com/product/wildflower-varietal-raw-honey-queen-bee-3lb/
    {
        "Color": "dark-amber",
        "Name": "Wildflower Varietal Raw Honey Queen Bee",
        "Company": "Go Raw Honey",
        "Size(oz)": 48,
        "Price($)": 37.99,
        img: "images/Wildflower-QueenBee-800px-COMP-removebg-preview.png",
        href: "https://www.gorawhoney.com/product/wildflower-varietal-raw-honey-queen-bee-3lb/"
    },
    // https://www.smileyhoney.com/products/sourwood-honey
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size(oz)": 15,
        "Price($)": 16.50,
        img: "images/15-oz-sourwood-honey.png",
        href: "https://www.smileyhoney.com/products/sourwood-honey?variant=6737072881694",
    },
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size(oz)": 16,
        "Price($)": 16.00,
        img: "images/16-oz-sour-wood-honey.png",
        href: "https://www.smileyhoney.com/products/sourwood-honey?variant=32984086152",
    },
    // https://www.gorawhoney.com/product/baby-bee-12oz-pure-raw-clover-honey/
    {
        "Color": "extra-light-amber",
        "Name": "Baby Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size(oz)": 12,
        "Price($)": 19.99,
        img: "images/Water_White_Honey-removebg-preview.png",
        href: "https://www.gorawhoney.com/product/baby-bee-12oz-pure-raw-clover-honey/",
    },
    //
    {
        "Color": "extra-light-amber",
        "Name": "Honey Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size(oz)": 24,
        "Price($)": 24.99,
        img: "images/last_Honey-Bee-OnWhite-removebg-preview.png",
        href: "https://www.gorawhoney.com/product/honey-bee-24oz-pure-raw-clover-honey/",
    },
    //
    {
        "Color": "water-white",
        "Name": "Raw Organic Ohi'a Lehua Blossom Honey",
        "Company": "Big Island Bees Honey",
        "Size(oz)": 9,
        "Price($)": 15.59,
        img: "images/ohia-lehua-honey.png",
        href: "https://www.instacart.com/products/49706-big-island-bees-honey-hawaiian-organic-ohi-a-lehua-blossom-9-00-oz?retailer_id=257&region_id=2422193604&utm_medium=sem_shopping&utm_source=instacart_google&utm_campaign=ad_demand_shopping_rp_food_all-non-ca_evergreen&utm_content=accountid-8145171519_campaignid-19906372963_adgroupid-150626721754_device-c&utm_term=targetid-pla-1390999193264_locationid-9033300_adtype-pla_productchannel-online_merchantid-260496658_storecode-_productid-49706&gad_source=1&gclid=Cj0KCQjw5ea1BhC6ARIsAEOG5pwjElQjmaVg5Pwi9aEraEy67GmQpDrXLILi1jXH_3XaRuHOIG1-jJkaAru5EALw_wcB",
    },
    {
        "Color": "dark-amber",
        "Name": "Raw Monofloral Manuka Honey KFactor-16",
        "Company": "Wedderspoon",
        "Size(oz)": 17.6,
        "Price($)": 35.48,
        img: "images/manuka-honey.png",
        href: "https://www.swansonvitamins.com/p/wedderspoon-raw-manuka-honey-kfactor-16-17-6-oz-500-grams-jar?showPopup=f&a=1&DFA=1&utm_medium=shoppingads&utm_source=google&utm_campaign=shopping+standard+healthy+food&utm_content=&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw5ea1BhC6ARIsAEOG5pzneY_6p_fHgJEdq8fzXs8TPtA1hOEd-XcWYdRL5IOcUObPYUtx81YaAmRQEALw_wcB",
    },
];

// Types: Name, Size(oz), Price($)
// If last 2 chars is pointing up, sort by biggest to smallest price/size
function sortBy (typeSort) {
    return function () { // Use this syntax, () => {} syntax doesn't work
        if (this.innerHTML.slice(-2) == "/\\") {
            honeysSold.sort((a, b) => {
                return b[typeSort] - a[typeSort];
            })
            resetAllOtherHTML()
            this.innerHTML = this.innerHTML.slice(0, -2) + "\\/";
        }
        else {
            honeysSold.sort((a, b) => {
                return a[typeSort] - b[typeSort];
            })
            resetAllOtherHTML()
            this.innerHTML = this.innerHTML.slice(0, -2) + "/\\";
        }
        makeShoppingContent(honeysSold);
    }
}

// If last 2 chars is pointing up, sort by A to Z
function textSortBy(typeSort) {
    return function () {
        if (this.innerHTML.slice(-3) == "A-Z") {
            honeysSold.sort((a, b) => {
                return a[typeSort].localeCompare(b[typeSort]);
            })
            resetAllOtherHTML()
            this.innerHTML = this.innerHTML.slice(0, -3) + "Z-A";
        }
        else {
            honeysSold.sort((a, b) => {
                return b[typeSort].localeCompare(a[typeSort]);
            })
            resetAllOtherHTML()
            this.innerHTML = this.innerHTML.slice(0, -3) + "A-Z";
        }
        makeShoppingContent(honeysSold);
    }
}
//

//
function resetAllOtherHTML() {
    priceSort.innerHTML = "Price ($) /\\";
    sizeSort.innerHTML= "Size (oz) /\\";
    nameSort.innerHTML = "Name A-Z";
    colorFilters.forEach( (colorFilter) => {colorFilter.style.display = 'none'});
}
//

// Color filter
function filterColor(colorWanted) {
    return function() {
        let filteredHoneys = honeysSold.filter((honey) => {
            honey["Color"] === colorWanted;
        })
        makeShoppingContent(filteredHoneys);

        console.log(this.id) //is a problem, doesnt choose the id i want
    }
}   

function toggleColorFilterOptions() {
    if( colorSort.innerHTML.slice(-3) == '...' ) {
        resetAllOtherHTML();
        colorFilters.forEach( (colorFilter) => {colorFilter.style.display = 'block'}); 
        colorSort.innerHTML = 'Color -';   
    } else {
        colorSort.innerHTML = 'Color ...';   
        colorFilters.forEach( (colorFilter) => {colorFilter.style.display = 'none'}); 
    }
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
            <p>${honeyItem["Name"]}<br>${honeyItem["Size(oz)"]} oz.</p>
            <p>Price: ${honeyItem["Price($)"].toLocaleString("en-US", {style:"currency", currency: "USD"})}</p> 
            <a href=${honeyItem["href"]} class="shopping-link" target="_blank">Shop Now</a>
        </div>`
    });
}

makeShoppingContent(honeysSold); 

// Use filter/sorting buttons
const priceSort = document.getElementById('price-sort');
const sizeSort = document.getElementById('size-sort');
const colorSort = document.getElementById('color-sort');
const colorFilters = document.querySelectorAll('#color-filter');
const nameSort = document.getElementById('name-sort');

priceSort.addEventListener('click', sortBy("Price($)")); 
sizeSort.addEventListener('click', sortBy("Size(oz)"));
colorSort.addEventListener('click', toggleColorFilterOptions);
colorFilters.forEach( (colorFilter) => {colorFilter.addEventListener('click', filterColor(colorFilter.id) )});
nameSort.addEventListener('click', textSortBy("Name"));


//
const filterOrSortByButton = document.getElementById("shop-sorter");
const sortingOptions = document.getElementById("sorting-options");
filterOrSortByButton.addEventListener('click', () => {

    if( sortingOptions.style.display == 'none' ) {
        sortingOptions.style.display = "block";
        console.log('it shows!') // why doesnt this work on the first click?
    } else {
        sortingOptions.style.display = 'none';
    }

})


// To do's
/*
Make filter + options' locations relative, not fixed.

change color's text later
fix img sizing and center in the page
*/