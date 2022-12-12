class MovableObject extends DrawableObject {
    groundPosition = 180;
    speed = 0.15;
    otherDirection = false;
    speed_y = 0;
    acceleration = 1.75;
    energy = 100;
    lastHit = 0;
    amountOfCoins = 0;
    amountOfBottles = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
    * creates an interval for moving and animation of gravity and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
    */
    applyGravity() {
        this.gravityInterval = setStoppableInterval(this.gravity.bind(this), 1000 / 40);
    }


    /**
     * every object which can be thrown or jumps comes back to the ground Position
     */
    gravity() {
        if (this.isAboveGround() || this.speed_y > 0) {
            this.y -= this.speed_y;
            this.speed_y -= this.acceleration;
        } else {
            this.y = this.groundPosition;
        }
    };

    /**
     * checks if a object is in the air (jumping or thrown)
     * @returns true or false
     */
    isAboveGround() {
        return this.y < this.groundPosition;
    };


    /**
     * function to go through arrays with images to create animation
     * @param {string} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // % gibt den Rest einer Dividierung zurück
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    /**
     * checks if value of x and y of an character or movableObject is greater or smaller than of the x and y value of the object
     * @param {object} obj 
     * @returns true or false
     */
    isColliding(obj) {
        return (this.x + this.width - this.offset.right) > obj.x + obj.offset.left &&
            this.x + this.offset.left < (obj.x + obj.width - obj.offset.right) &&
            (this.y + this.height - this.offset.bottom) > obj.y + obj.offset.top &&
            (this.y + this.offset.top) < (obj.y + obj.height - obj.offset.bottom);
    }

    /**
     * if character collides with an enemy or a bottle collides with endboss, the value of lost energy is subtract from energy of character or boss
     * if the energy is still > 0 a lastHit time is set.
     * @param {number} lostEnergy 
     */
    hit(lostEnergy) {
        this.energy -= lostEnergy;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        };
    };

    /**
     * isHurt animation is played as long as the time between last hit is smaller than 0.5
     * @returns true or false
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms sinse last hit
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.5;
    };

    /**
     * after every action a time is set as last action. the idle Time is converted to seconds
     * @returns number
     */
    isIdle() {
        let idleTime = new Date().getTime() - lastAction;
        idleTime = idleTime / 1000;
        return idleTime;
    };

    /**
     * sets the energy of the character to 0
     * @returns energy of the character as 0
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * the value of speed is added to the current x position of the object
     */
    moveRight() {
        this.x += this.speed;
    };

    /**
     * the value of speed is subtracted to the current x position of the object
     */
    moveLeft() {
        this.x -= this.speed;
    };

    /**
     * sets the variable speed_y of an object to 30 for gravity function
     */
    jump() {
        this.speed_y = 30;
    };

    /**
     * Pepe collides with a coin, the number of coins is raised and the collided coin is removed from the game
     * @param {object} obj 
     */
    collectCoins(obj) {
        this.amountOfCoins = this.amountOfCoins + 1;
        let index = this.world.level.coins.indexOf(obj);
        this.world.level.coins.splice(index, 1);
    };

    /**
     * Pepe collides with a bottle, the number of bottles is raised and the collided bollte is removed from the game
     * @param {object} obj 
     */
    collectBottles(obj) {
        this.amountOfBottles = this.amountOfBottles + 1;
        let index = this.world.level.bottles.indexOf(obj);
        this.world.level.bottles.splice(index, 1);
    }

    /**
     * dependig of the number off all coins in the game and the number of collected coins the coin statusbar is updated
     */
    updateCoinbar() {
        let percentageOfCoins = this.amountOfCoins / allCoins * 100;
        this.world.statusbars.coinbar.setPercentage(percentageOfCoins, this.world.statusbars.coinbar.COLLECTED_COINS_IMAGES);
    }

    /**
     * dependig of the number off all bottles in the game and the number of collected bottles the bottle statusbar is updated
     */
    updateBottlebar() {
        let percentageOfBottles = this.amountOfBottles / numberOfBottles * 100;
        this.world.statusbars.bottlebar.setPercentage(percentageOfBottles, this.world.statusbars.bottlebar.COLLECTED_BOTTLES_IMAGES);
    }

    /**
     * updates the healthbar of character after hit
     * @param {number} energy 
     * @param {string} images 
     */
    updatePepeHealthbar(energy, images) {
        this.world.statusbars.healthbar.setPercentage(energy, images);
    }

    /**
     * updates the healthbar of endboss after hit
     * @param {number} energy 
     * @param {string} images 
     */
    updateEndbossHealthbar(energy, images) {
        world.statusbars.boss_healthbar.setPercentage(energy, images);
    }

}