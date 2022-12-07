intervalIds = [];

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
    sound.play();
}

function pauseSound(sound) {
    sound.pause();
}

function lostOutroscreen() {
    document.getElementById('lost').classList.remove('d-none');
    document.getElementById('lost').classList.add('outroscreen');
}

function winOutroscreen() {
    document.getElementById('won').classList.remove('d-none');
    document.getElementById('won').classList.add('outroscreen');
}