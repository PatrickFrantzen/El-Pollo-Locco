let canvas;
let world;
let canvasheight = 480;
let keyboard = new Keyboard();
let lastAction = 0
let mobile = false;


function init() {
    initLevel();
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('startscreen').classList.add('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    checkMobileDevice();
    //stopGame();
}

function checkMobileDevice() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        document.getElementById('button-container').classList.remove('d-none');
        mobile = true;
    } else {
        mobile = false;
    }
      
}