class SmallChicken extends Chicken {
    groundPosition = 350;
    minSpeed = 0.4;
    maxSpeed = 1.3;
    jumpMoment = getRandomArbitrary(80, 160);
    jumpCounter = 0;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed);
    speed = this.animationSpeed / 2;
    offset = {
        top: 35,
        left: 25,
        right: 25,
        bottom: 35
    };

    walkingImages = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    deadImages = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];



    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.loadImages(this.walkingImages);
        this.loadImages(this.deadImages);
        this.x = x + Math.random() * 500;
        this.applyGravity();
        this.animate();

    }


    /**
     * creates an interval for moving and animation of small chicken and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
     */
    animate() {
        this.playInterval = setStoppableInterval(this.play.bind(this), 100);
        this.moveInterval = setStoppableInterval(this.move.bind(this), 1000 / 60);
    }

    /**
     * small chicken walks to left side while alive and JumpTimer is set
     */
    move() {
        if (this.alive == true) {
            this.moveLeft();
            this.setJumpTimer();
        }
    }

    /**
     *Different Animation when Character is dead or alive
     */
    play() {
        if (this.alive == true) {
            this.playAnimation(this.walkingImages);
        } else {
            this.loadImage(this.deadImages);
            clearInterval(this.playInterval);
            clearInterval(this.moveInterval);
        }
    }

    /**
     * while walking the jumpCounter counts upwards and when jumpCounter is greater than the random jumpMoment the chicken jumps.
     */
    setJumpTimer() {
        if (!this.isAboveGround()) {
            this.jumpCounter += 0.5;
        }
        if (this.jumpCounter > this.jumpMoment) {
            this.jump();
            this.jumpCounter = 0;
        }
    }
}