class SmallChicken extends Chicken {
    minSpeed = 0.4;
    maxSpeed = 1.3;
    jumpImpuls = getRandomArbitrary(80, 160);
    jumpCounter = 0;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed);
    speed = this.animationSpeed / 2;

    Walking_Images = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    Dead_Images = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    offset = {
        top: 35,
        left: 25,
        right: 25,
        bottom: 35
    };

    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.loadImages(this.Walking_Images);
        this.loadImages(this.Dead_Images);
        this.x = x + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
        this.applyGravity();
        this.animate();

    }


    /**
     * creates an interval for moving and animation of chicken and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
     */
    animate() {
        this.playInterval = setStoppableInterval(this.play.bind(this), 100);
        this.moveInterval = setStoppableInterval(this.move.bind(this), 1000 / 60);
    }


    move() {
        if (this.alive == true) {
            this.moveLeft();
            this.setJumpImpulse();
        }

    }

    play() {
        if (this.alive == true) {
            this.playAnimation(this.Walking_Images);
        } else {
            this.loadImage(this.Dead_Images);
            clearInterval(this.playInterval);
            clearInterval(this.moveInterval);
        }
    }

    setJumpImpulse() {
        if (!this.isAboveGround()) {
            this.jumpCounter += 0.5;
        }
        if (this.jumpCounter > this.jumpImpuls) {
            this.jump();
            this.jumpCounter = 0;
        }
    }
}