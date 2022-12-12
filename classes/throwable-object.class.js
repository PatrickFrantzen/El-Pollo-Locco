class ThrowableObject extends MovableObject {
    groundPosition = 360;
    hit = false;
    splashSoundCounter = 0;
    splashSound = false;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    Throwing_Images = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    Splashing_Images = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y, speed_y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.Throwing_Images);
        this.loadImages(this.Splashing_Images);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.speed_y = speed_y;
        this.throw();
    }

    /**
     * Function to apply gravity and animation to a thrown bottle
     */
    throw() {
        this.applyGravity();
        this.setIntervalsforThrowing();
    };

    /**
    * creates an interval for moving and animation of bottles and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
    */
    setIntervalsforThrowing() {
        this.moveInterval = setStoppableInterval(this.move.bind(this), 25);
        this.playInterval = setStoppableInterval(this.play.bind(this), 250);
        this.soundInterval = setStoppableInterval(this.sound.bind(this), 1);
    }

    /**
     * as long as the bottle is above ground it moves forward
     */
    move() {
        if (this.isAboveGround()) {
            this.x += 5;
        }
    }

    /**
     * as long as the bottle is above ground it rotates and then splash on ground
     */
    play() {
        if (this.isAboveGround()) {
            this.rotate();
        } else {
            this.splash();
        };
    }

    rotate() {
        this.playAnimation(this.Throwing_Images);
    };

    splash() {
        this.playAnimation(this.Splashing_Images);
        this.splashSound = true;
    };

    /**
     * Function to reduce the playing of the sound to one time
     */
    sound() {
        if (this.splashSound == true && this.splashSoundCounter == 0) {
            this.splashingSound();
            this.splashSoundCounter++;
        }
        if (this.splashSoundCounter > 0) {
            clearInterval(this.soundInterval);
            this.splashSoundCounter = 0;
            this.splashSound = false;
        }

    }

    splashingSound() {
        playSound(world.shattering_sound);
    }

}