let intervalIds = [];
let music = [];
let mute = true;
let intro = new Audio('audio/western_theme.mp3');


/*Functions for Intervals */

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
    return id;
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

/*General Game Functions */

function stopGame() {
    world.western_sound.muted = true;
    for (let i = 1; i < 9999; i++) {
        window.clearInterval(i);
    }
}

function addClassList(id, style) {
    document.getElementById(id).classList.add(style);
}

function removeClassList(id, style) {
    document.getElementById(id).classList.remove(style);
}



/* Music Functions */ 
function playIntro() {
    intro.play();
}

function pauseIntro() {
    intro.pause();
}

function playSound(sound) {
    if (mute) {
        sound.muted = true;
    } else {
        sound.muted = false;
        sound.play();
    }
}

function muteGame() {
    if (!mute) {
        mute = true;
        addClassList('btnVolume', 'd-none');
        removeClassList('btnMute', 'd-none');
    } else {
        mute = false;
        removeClassList('btnVolume', 'd-none');
        addClassList('btnMute', 'd-none');
    };
}

/*Display Functions */ 

function lostOutroscreen() {
    addClassList('canvas', 'd-none');
    addClassList('button-container', 'd-none')
    addClassList('lost', 'd-flex');
    removeClassList('restart', 'd-none');
    removeClassList('lost', 'd-none');
}

function winOutroscreen() {
    addClassList('canvas', 'd-none');
    addClassList('button-container', 'd-none')
    addClassList('win', 'd-flex');
    removeClassList('restart', 'd-none');
    removeClassList('win', 'd-none');
}

function closeHelpDialog() {
    addClassList('help-display-overlay', 'd-none');
}

function openHelpDialog() {
    removeClassList('help-display-overlay', 'd-none');
}