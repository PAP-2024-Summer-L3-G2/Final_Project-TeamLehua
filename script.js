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


/*
1. Water White Honey
Go Raw Honey
Sizes: 12oz, 24oz, 3lb, 1 gallon (12lbs)
Prices:
12oz: $14.99
24oz: $24.99
3lb: $35.99
1 gallon (12lbs): $76.99 (Go Raw Honey) (


Water White Honey
Honey Name: Clover Honey
Company: Go Raw Honey
Sizes: 12oz, 24oz, 3lb, 1 gallon (12lbs)
Prices:
12oz: $14.99
24oz: $24.99
3lb: $35.99
1 gallon (12lbs): $76.99 (Go Raw Honey) (Go Raw Honey) (Go Raw Honey)
Extra White Honey
Honey Name: Extra White Grade Raw Honey
Company: Lappe's Bee Supply
Size: 55-gallon drum
Price: $2,340.00 per 55-gallon drum (Lappe's Bee Supply and Honey Farm LLC)
White Honey
Honey Name: Clover Honey
Company: Go Raw Honey
Sizes: 12oz, 24oz, 3lb, 1 gallon (12lbs)
Prices:
12oz: $14.99
24oz: $24.99
3lb: $35.99
1 gallon (12lbs): $76.99 (Go Raw Honey) (Go Raw Honey)
*/