class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbars = CharakterStatusbars;
    throwableObjects = [];
    throw = false;
    hit = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run()
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    };

    checkThrowObjects() {
        if (this.keyboard.D && this.character.amountOfBottles >= 1) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.throw = true;
            this.character.amountOfBottles = this.character.amountOfBottles - 1;
            this.character.updateBottlebar();
        } else {
            this.throw = false;
        }
    };

    checkCollisions() {
        this.collidingEnemyInterval = setStoppableInterval(this.collidingEnemy.bind(this), 3000);
        this.collidingEnemyFromAboveInterval = setStoppableInterval(this.collidingEnemyFromAbove.bind(this), 100);

        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins(coin);
                this.character.updateCoinbar();
            };
        });
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottles(bottle);
                this.character.updateBottlebar();
            };
        });
        if (this.throw == true) {
            this.hittingBossInterval = setStoppableInterval(this.hittingEndboss.bind(this), 1500);
        };
    }

    collidingEnemy(){
        this.level.enemies.forEach((enemy) => {
            if( this.character.isColliding(enemy) && enemy.alive == true) {
                this.character.hit(5);
                this.statusbars.healthbar.setPercentage(this.character.energy, this.statusbars.healthbar.HEALTH_IMAGES);
            };
            clearInterval(this.collidingEnemyInterval);
        });
    }

    collidingEnemyFromAbove() {
        this.level.enemies.forEach((enemy) => {
            if( this.character.isColliding(enemy) && this.character.isAboveGround() && enemy.alive == true) {
                enemy.alive = false;
                console.log('This enemy is dead', enemy);
            };
        });
    }


    hittingEndboss() {
        let bottle = this.throwableObjects[0];
        let endboss = this.level.enemies[15];
        this.bottleCollidesWithEndboss(bottle, endboss)
        this.resetIntervalAfterHit();
    }

    bottleCollidesWithEndboss(bottle, endboss) {
        if (bottle.isColliding(endboss) && endboss.energy > 0) {
            endboss.hit(25);
            this.hit = true;
            console.log('boss health', endboss.energy);
        } else {
            clearInterval(this.hittingBossInterval);
        };
    }

    resetIntervalAfterHit() {
        if (this.hit == true) {
            clearInterval(this.hittingBossInterval);
            this.hit = false;
        };
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
        //object.drawFrame(this.ctx);

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