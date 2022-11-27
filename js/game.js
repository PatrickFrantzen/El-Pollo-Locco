let canvas;
let world;
let canvasheight = 480;
let keyboard = new Keyboard();
let lastAction = 0


function init() {
    document.getElementById('game').classList.remove('game');
    document.getElementById('startscreen').classList.add('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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
        console.log('Last Action was', lastAction);
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
        lastAction = new Date().getTime();
        console.log('Last Action was', lastAction);
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
        lastAction = new Date().getTime();
        console.log('Last Action was', lastAction);
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
        lastAction = new Date().getTime();
        console.log('Last Action was', lastAction);
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
        lastAction = new Date().getTime();
        console.log('Last Action was', lastAction);
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
        lastAction = new Date().getTime();
        console.log('Last Action was', lastAction);
    }
});