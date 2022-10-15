let canvas;
let world;
let canvasheight = 480;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My Charakter is', world.character);
}