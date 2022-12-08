intervalIds = [];
music = [];
mute = false;


function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
    return id;
};

function stopGame() {
    world.western_sound.muted = true;
    for (let i = 1; i < 9999; i++) {
        window.clearInterval(i);
    }
}

function muteGame() {
    if (!mute) {
        mute = true;
        document.getElementById('btnVolume').classList.add('d-none');
        document.getElementById('btnMute').classList.remove('d-none');
    } else {
        mute = false;
        document.getElementById('btnVolume').classList.remove('d-none');
        document.getElementById('btnMute').classList.add('d-none');
    };
}


function playSound(sound) {
    if (mute) {
        sound.muted = true;
    } else {
        sound.muted = false;
        sound.play();
    }
}


function lostOutroscreen() {
    document.getElementById('lost').classList.remove('d-none');
    document.getElementById('image-container').classList.remove('d-none');
    document.getElementById('lost').classList.add('outroscreen');
    document.getElementById('restart').classList.remove('d-none');
}

function winOutroscreen() {
    document.getElementById('won').classList.remove('d-none');
    document.getElementById('image-container').classList.remove('d-none');
    document.getElementById('won').classList.add('outroscreen');
    document.getElementById('restart').classList.remove('d-none');
}

function closeHelpDialog() {
    document.getElementById('help-display-overlay').classList.add('d-none');
}

function openHelpDialog() {
    document.getElementById('help-display-overlay').classList.remove('d-none');
}