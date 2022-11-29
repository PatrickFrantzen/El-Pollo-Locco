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