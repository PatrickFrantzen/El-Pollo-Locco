class MovableObject extends DrawableObject {

    speed= 0.15;
    otherDirection = false;
    speed_y = 0;
    acceleration = 1.75;
    energy = 100;
    lastHit = 0;
    amountOfCoins = 0;
    amountOfBottles = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speed_y > 0) {
                this.y -= this.speed_y;
                this.speed_y -= this.acceleration;    
            }

        },1000 / 25);
    };

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 360; //Ändern das es auf dem Boden auftritt und zerspringt
        } else {
            return this.y < 180;
        }
    }



    playAnimation(images) {
        let i = this.currentImage % images.length; // % gibt den Rest einer Dividierung zurück
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    
    isColliding(obj) {
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.height) >= obj.y &&
                (this.y) <= (obj.y + obj.height)
    };

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms sinse last hit
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }

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
            console.log('this coin has index', index);
            console.log('got this', obj);  
    };

    collectBottles(obj) {
        this.amountOfBottles = this.amountOfBottles +1;
        let index = this.world.level.bottles.indexOf(obj);
        this.world.level.bottles.splice(index, 1);
        console.log('this bottle has index', index);
        console.log('got this', obj);
    }

}