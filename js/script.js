intervalIds = [];
music = [];
mute = false;

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
    return id;
};

function stopGame() {
    for (let i = 1; i < 9999; i++) {
        window.clearInterval(i);
    }
}

function playSound(sound) {
    if (mute) {
        sound.muted = true;
    } else {
        sound.play();
    }
}


function lostOutroscreen() {
    document.getElementById('lost').classList.remove('d-none');
    document.getElementById('lost').classList.add('outroscreen');
}

function winOutroscreen() {
    document.getElementById('won').classList.remove('d-none');
    document.getElementById('won').classList.add('outroscreen');
}

function closeHelpDialog() {
    document.getElementById('help-display-overlay').classList.add('d-none');
}

function openHelpDialog() {
    document.getElementById('help-display-overlay').classList.remove('d-none');
}