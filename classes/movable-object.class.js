class MovableObject extends DrawableObject {

    IntervalIdsplash;
    speed= 0.15;
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
    intervalIds = [];

    setStoppableInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    };
   
    applyGravity() {
        if (this.isAboveGround() || this.speed_y > 0) {
            this.y -= this.speed_y;
            this.speed_y -= this.acceleration;
        }
        return false;
    };

   
    /*applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speed_y > 0) {
                this.y -= this.speed_y;
                this.speed_y -= this.acceleration;    
            }
        },1000 / 25);
    };*/

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 360; //Ändern das es auf dem Boden auftritt und zerspringt
        } else {
            return this.y < 180;
        };
    };


    playAnimation(images) {
        let i = this.currentImage % images.length; // % gibt den Rest einer Dividierung zurück
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    
    isColliding(obj) {
        return  (this.x + this.width - this.offset.right) > obj.x + obj.offset.left && 
                this.x + this.offset.left < (obj.x + obj.width - obj.offset.right) && 
                (this.y + this.height - this.offset.bottom) > obj.y + obj.offset.top &&
                (this.y + this.offset.top) < (obj.y + obj.height - obj.offset.bottom)
    };

    hit(lostEnergy) {
        this.energy -= lostEnergy;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        };
    };

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms sinse last hit
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    };

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    };

    moveLeft() {
        this.x -= this.speed;
        
    };

    jump() {
        this.speed_y = 30;
    };

    collectCoins(obj) {
            this.amountOfCoins = this.amountOfCoins + 1;
            let index = this.world.level.coins.indexOf(obj);
            this.world.level.coins.splice(index, 1); 
    };

    collectBottles(obj) {
        this.amountOfBottles = this.amountOfBottles +1;
        let index = this.world.level.bottles.indexOf(obj);
        this.world.level.bottles.splice(index, 1);
    }

    updateCoinbar() {
        let percentageOfCoins = this.amountOfCoins / allCoins * 100;
        this.world.statusbars.coinbar.setPercentage(percentageOfCoins, this.world.statusbars.coinbar.COLLECTED_COINS_IMAGES);
    }

    updateBottlebar() {
        let percentageOfBottles = this.amountOfBottles / numberOfBottles * 100;
        this.world.statusbars.bottlebar.setPercentage(percentageOfBottles, this.world.statusbars.bottlebar.COLLECTED_BOTTLES_IMAGES);
    }

}