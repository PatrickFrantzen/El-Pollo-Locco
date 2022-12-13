class World {
    debugmodus = false;
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX= 0;
    statusbars = CharakterStatusbars;
    throwableObjects = [];
    lastThrow;
    bosshit = false;
    muteActivated = false;

    shatteringSound = new Audio('audio/broken_glass.mp3');
    painSound = new Audio('audio/pain.mp3');
    chickenSound = new Audio('audio/chicken.mp3')
    angryChickenSound = new Audio('audio/angry_chicken.mp3');
    throwingSound = new Audio('audio/throwing.mp3');
    walkingSound = new Audio('audio/running.mp3');
    jumpingSound = new Audio('audio/jumping.mp3');
    westernSound = new Audio('audio/western_theme.mp3');


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

   /**
    * creates an interval for moving and animation of different functions and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
    */
    run() {
        this.checkThrowObjectsInterval = setStoppableInterval(this.checkThrowObjects.bind(this), 200);
        this.collidingEnemyInterval = setStoppableInterval(this.pepeCollidingEnemy.bind(this), 100);
        this.collidingEndbossInterval = setStoppableInterval(this.pepeCollidingEndboss.bind(this), 300);
        this.collidingEnemyFromAboveInterval = setStoppableInterval(this.pepeCollidingEnemyFromAbove.bind(this), 1);
        this.checkingForHittingBossInterval = setStoppableInterval(this.bottleHittingEndboss.bind(this), 100);
        this.collidingCoinInterval = setStoppableInterval(this.pepeCollidingCoin.bind(this), 1);
        this.collidingBottleInterval = setStoppableInterval(this.pepeCollidingBottle.bind(this), 1);
        this.backgroundMusicInterval = setStoppableInterval(this.checkIfMuteIsActive.bind(this), 1);
    };

    /**
     * automatic start of backgroundmusic
     */
    backgroundMusic() {
        this.westernSound.loop = true;
        playSound(this.westernSound);
    }

    /**
     * checks if a bottle is throwable and after sucessfully thrown bottle is removed
     */
    checkThrowObjects() {
        if (this.checkIfPepeCanThrow()) {
            this.pepeThrowsBottle();
            playSound(this.throwingSound);
        }
        if (!this.checkForLastThrow(1250)) {
            this.throwableObjects.splice(0, 1);
        }
    };

    /**
     * if all arguments are true a bottle can be thrown
     * @returns true or false
     */
    checkIfPepeCanThrow() {
        return this.keyboard.D && this.character.amountOfBottles >= 1 && !this.character.otherDirection && !this.checkForLastThrow(1251);
    }

    /**
     * generates a new bottle and updates the amount of throwable bottles and the bottle statusbar
     */
    pepeThrowsBottle() {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, 30);
        this.throwableObjects.push(bottle);
        this.character.amountOfBottles = this.character.amountOfBottles - 1;
        this.character.updateBottlebar();
        this.lastThrow = new Date().getTime();
    }

    /**
     * time of the last thrown bottle is compared to a given number to set the time between two throws
     * @param {number} ms 
     * @returns true or false
     */
    checkForLastThrow(ms) {
        let timepassed = new Date().getTime() - this.lastThrow;
        return timepassed < ms;
    }


    /**
     * When Character collides with coin, the amount of coins is changed,the coin statusbar is updated and the coin is removed from game
     */
    pepeCollidingCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins(coin);
                this.character.updateCoinbar();
            };
        });
    }

    /**
     * When Character collides with bottle, the amount of bottle is changed,the bottle statusbar is updated and the bottle is removed from game
     */
    pepeCollidingBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottles(bottle);
                this.character.updateBottlebar();
            };
        });
    }

    /**
     * When Character collides with an enemy, the character takes damage and the health statusbar is updated
     */
    pepeCollidingEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.alive == true) {
                this.character.hit(5);
                this.character.updatePepeHealthbar(this.character.energy, this.statusbars.healthbar.healthImages)
                playSound(this.painSound);
            };
        });
    }

    /**
     * When Character collides with endboss, the character takes damage and the health statusbar is updated
     */
    pepeCollidingEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && endboss.alive == true) {
                this.character.hit(25);
                this.character.updatePepeHealthbar(this.character.energy, this.statusbars.healthbar.healthImages)
                playSound(this.painSound);
            };
        });
    }

    /**
     * When Character jumps on an enemy and the enemy is alive and not jumping as well, the enemy dies
     */
    pepeCollidingEnemyFromAbove() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && enemy.alive == true && !enemy.isAboveGround()) {
                enemy.alive = false;
                playSound(this.chickenSound);
                setTimeout(() => {
                    this.removeChickenFromArray(enemy);
                }, 1000);
            };
        });
    }

    /**
     * When a bottle hits endboss, endboss takes damage and healthbar is updated
     */
    bottleHittingEndboss() {
        let endboss = this.level.endboss[0];
        let throwableBottle = this.throwableObjects;
        this.throwableObjects.forEach((bottle) => {
            if (endboss.isColliding(bottle)) {
                endboss.hit(25);
                bottle.splash();
                endboss.updateEndbossHealthbar(endboss.energy, this.statusbars.bossHealthbar.healthImages);
                this.playSoundsForHittingEndboss();
                throwableBottle.splice(0, 1);
            }
        });
    }

    playSoundsForHittingEndboss() {
        playSound(this.shatteringSound);
        playSound(this.angryChickenSound);
    }

    removeChickenFromArray(enemy) {
        let index = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(index, 1);
    }

    /**
     * interval check if variable mute is true or false to mute all sounds
     */
    checkIfMuteIsActive() {
        this.westernSound.muted = mute;
    }

    /**
     * function to add all objects to canvas and move camera
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        //translate einfügen um nicht bewegliche Objekte zu verschieben
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusbars.healthbar);
        this.addToMap(this.statusbars.coinbar);
        this.addToMap(this.statusbars.bottlebar);
        this.addToMap(this.statusbars.bossHealthbar);
        this.ctx.translate(this.cameraX, 0);
        //translate wieder an die Ausgangsposition -> Ergebnis: Die Statusbar bewegt sich mit
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endboss);
        this.addObjectToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);

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