let canvas;
let world;
let canvasheight = 480;
let keyboard = new Keyboard();
let lastAction = 0;


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
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        document.getElementById('button-container').classList.remove('d-none');
        activateMobileButtons();
    }
}


function activateMobileButtons() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
        lastAction = new Date().getTime();
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
        lastAction = new Date().getTime();
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
        lastAction = new Date().getTime();
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
        lastAction = new Date().getTime();
    });

}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
        lastAction = new Date().getTime();
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
        lastAction = new Date().getTime();
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
        lastAction = new Date().getTime();
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
        lastAction = new Date().getTime();
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
        lastAction = new Date().getTime();
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
        lastAction = new Date().getTime();
    }
});
