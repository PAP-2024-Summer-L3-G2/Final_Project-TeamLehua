// Bee Flying Animation
function makeBeeFly() {
    bee_static.src = 'images/bee-gif.gif';
    console.log('im running!')
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
    {
        "Color": "water-white",
        "Name": "Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 12,
        "Price ($)": 14.99
    },
    {
        "Color": "water-white",
        "Name": "Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 24,
        "Price ($)": 24.99
    },
    {
        "Color": "water-white",
        "Name": "Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 48,
        "Price ($)": 35.99
    },
    {
        "Color": "water-white",
        "Name": "Clover Honey",
        "Company": "Go Raw Honey",
        "Size (oz)": 192,
        "Price ($)": 76.99
    },
    {
        "Color": "extra-white",
        "Name": "Extra White Grade Raw Honey",
        "Company": "Lappe's Bee Supply",
        "Size (oz)": 7040,
        "Price ($)": 2340
    }
];
