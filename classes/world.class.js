class World {
    debugmodus = false;
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbars = CharakterStatusbars;
    throwableObjects = [];
    throw = false;
    bosshit = false;
    mute_activated = false;

    shattering_sound = new Audio('audio/broken_glass.mp3');
    pain_sound = new Audio('audio/pain.mp3');
    chicken_sound = new Audio('audio/chicken.mp3')
    angry_chicken = new Audio('audio/angry_chicken.mp3');
    throwing_sound = new Audio('audio/throwing.mp3');
    walking_sound = new Audio('audio/running.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');
    western_sound = new Audio('audio/western_theme.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.backgroundMusic();
    }

    setWorld() {
        this.character.world = this;
    }

    backgroundMusic() {
            this.western_sound.loop = true;
            playSound(this.western_sound);
    }

    run() {
        this.checkThrowObjectsInterval = setStoppableInterval(this.checkThrowObjects.bind(this), 200);
        this.collidingEnemyInterval = setStoppableInterval(this.collidingEnemy.bind(this), 100);
        this.collidingEndbossInterval = setStoppableInterval(this.collidingEndboss.bind(this), 300);
        this.collidingEnemyFromAboveInterval = setStoppableInterval(this.collidingEnemyFromAbove.bind(this), 1);
        this.checkingForHittingBossInterval = setStoppableInterval(this.checkingForHittingEndboss.bind(this), 100);
        this.collidingCoinInterval = setStoppableInterval(this.collidingCoin.bind(this), 1);
        this.collidingBottleInterval = setStoppableInterval(this.collidingBottle.bind(this), 1);
        this.backgroundMusicInterval = setStoppableInterval(this.checkIfMuteIsActive.bind(this), 1);
    };



    checkThrowObjects() {
        if (this.keyboard.D && this.character.amountOfBottles >= 1 && !this.character.otherDirection) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, 30);
            this.throwableObjects.push(bottle);
            this.character.amountOfBottles = this.character.amountOfBottles - 1;
            this.character.updateBottlebar();
            playSound(this.throwing_sound);
        }
    };

    collidingCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins(coin);
                this.character.updateCoinbar();
            };
        });
    }

    collidingBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottles(bottle);
                this.character.updateBottlebar();
            };
        });
    }

    collidingEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.alive == true) {
                this.character.hit(5);
                this.statusbars.healthbar.setPercentage(this.character.energy, this.statusbars.healthbar.HEALTH_IMAGES);
                playSound(this.pain_sound);
            };
        });
    }

    collidingEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && endboss.alive == true) {
                this.character.hit(25);
                this.statusbars.healthbar.setPercentage(this.character.energy, this.statusbars.healthbar.HEALTH_IMAGES);
                playSound(this.pain_sound);
            };
        });
    }

    collidingEnemyFromAbove() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && enemy.alive == true) {
                enemy.alive = false;
                playSound(this.chicken_sound);
                setTimeout(() => {
                    this.removeChickenFromArray(enemy);
                }, 1000);
            };
        });
    }

    checkingForHittingEndboss() {
        let endboss = this.level.endboss[0];
        let throwableBottle = this.throwableObjects;
        this.throwableObjects.forEach((bottle) => {
            if (endboss.isColliding(bottle)) {
                endboss.hit(25);
                this.playSoundsForHittingEndboss();
                clearInterval(throwableBottle[0].moveInterval);
                clearInterval(throwableBottle[0].playInterval);
                clearInterval(throwableBottle[0].gravityInterval);
                throwableBottle.splice(0, 1);
            }
        });
    }

    playSoundsForHittingEndboss() {
        playSound(this.shattering_sound);
        playSound(this.angry_chicken);
    }

    removeChickenFromArray(enemy) {
        let index = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(index, 1);
    }

    checkIfMuteIsActive() {
        if (mute) {
            this.western_sound.muted = true;
        } else {
            this.western_sound.muted = false;
        }
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        //translate einfügen um nicht bewegliche Objekte zu verschieben
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbars.healthbar);
        this.addToMap(this.statusbars.coinbar);
        this.addToMap(this.statusbars.bottlebar);
        this.ctx.translate(this.camera_x, 0);
        //translate wieder an die Ausgangsposition -> Ergebnis: Die Statusbar bewegt sich mit
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endboss);
        this.addObjectToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);


        //Draw() wird immer wieder ausgeführt, je nach Leistung der Graphikkarte
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        if (this.debugmodus) {
            object.drawFrame(this.ctx); // auskommentieren wenn kein Rahmen mehr gezogen werden soll
        }

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

}