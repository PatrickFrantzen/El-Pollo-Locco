class MovableObject extends DrawableObject {

    speed= 0.15;
    otherDirection = false;
    speed_y = 0;
    acceleration = 1.75;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speed_y > 0) {
                this.y -= this.speed_y;
                this.speed_y -= this.acceleration;    
            }

        },1000 / 25);
    };

    isAboveGround() {
        return this.y < 180;
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
}