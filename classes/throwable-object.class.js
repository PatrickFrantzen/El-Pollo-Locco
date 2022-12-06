class ThrowableObject extends MovableObject {

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    hit = false;
    movingPixels = 5;
    maximumPixels = 30;
    x = 0;

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

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.Throwing_Images);
        this.loadImages(this.Splashing_Images);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speed_y = 30;
        this.applyGravity();
        playSound(world.character.throwing_sound);
        this.moveInterval = setStoppableInterval(this.move.bind(this), 25);
        this.playInterval = setStoppableInterval(this.play.bind(this), 250);
        setTimeout(() => {
            this.splashSound();
        }, 1000);
        setTimeout(() => {
            this.removeBottlefromArray();
        }, 2000);
    };

    move() {
        if (this.isAboveGround()) {
            this.x += 5;
        } else {
            this.cancelMove();
        }
    }

    cancelMove() {
        if (this.hit == true && this.x == this.maximumPixels) {
            clearInterval(this.moveInterval)
        }
    }

   play() {
        if (this.isAboveGround() && this.hit == true) {
            this.splash();
        }else if (this.isAboveGround()) {
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
    };

    splashSound() {
        world.character.shattering_sound.play();
    }

    removeBottlefromArray() {
        world.throwableObjects.splice(0, 1);
        clearInterval(this.moveInterval);
        clearInterval(this.playInterval);
    }


}