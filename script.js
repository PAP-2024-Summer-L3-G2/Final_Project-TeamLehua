// Bee Flying Animation
function makeBeeFly() {
    bee_static.src = 'images/bee-gif.gif';
    console.log('im running!')
}

function makeBeeStop() {
    bee_static.src = 'images/static-bee.png';
}

const bee_static = document.querySelector('#bee-gif');
bee_static.addEventListener('mouseover', makeBeeFly);
bee_static.addEventListener('mouseleave', makeBeeStop);
//

// Shopping Filter