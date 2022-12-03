class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtsPressEvents();
    }

    bindBtsPressEvents() {
        if (this.mobile == true) {
            document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.LEFT = true;
                console.log('is touched');
            });
    
            document.getElementById('btnLeft').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.LEFT = false;
            }); 
        }
    }

    bindKeyPressEvents() {
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
    }

}