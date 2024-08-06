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
        "Name": "Honey Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 24,
        "Price ($)": 24.99
    },
    {
        "Color": "extra-light-amber",
        "Name": "Queen Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 48,
        "Price ($)": 35.99
    },
    {
        "Color": "extra-light-amber",
        "Name": "Whole Hive Bulk Raw Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 192,
        "Price ($)": 76.99
    },
    // https://goldengirlshoneyandhives.com/product/fireweed-honey/
    {
        "Color": "white",
        "Name": "Pacific Northwest Fireweed Honey",
        "Company": "Golden Girls Honey",
        "Size (oz)": 13,
        "Price ($)": 16
    }, 
    // https://www.gorawhoney.com/product/wildflower-varietal-raw-honey-queen-bee-3lb/
    {
        "Color": "dark-amber",
        "Name": "Wildflower Varietal Raw Honey Queen Bee",
        "Company": "Go Raw Honey",
        "Size (oz)": 48,
        "Price ($)": 37.99
    },
    // https://www.smileyhoney.com/products/sourwood-honey
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size (oz)": 15,
        "Price ($)": 16.5
    },
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size (oz)": 16,
        "Price ($)": 16
    },
    {
        "Color": "light-amber",
        "Name": "Sourwood Honey",
        "Company": "Smiley Honey LLC",
        "Size (oz)": 8,
        "Price ($)": 8
    },
    // https://www.gorawhoney.com/product/baby-bee-12oz-pure-raw-clover-honey/
    {
        "Color": "extra-light-amber",
        "Name": "Baby Bee Raw Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 12,
        "Price ($)": 19.99
    },
];

// Types: Color, Name, Size (oz), Price ($)
// Operators: >, < 
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
}

function textSortBy(type, biggerAtTop) {
    if (biggerAtTop) {
        honeysSold.sort((a, b) => {
            return a[type].localeCompare(b[type]);
        })
    }
    else {
        honeysSold.sort((a, b) => {
            return b[type].localeCompare(a[type]);
        })
    }
}
