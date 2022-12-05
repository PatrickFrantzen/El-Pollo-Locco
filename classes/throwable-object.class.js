class ThrowableObject extends MovableObject {

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
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
        world.character.throwing_sound.play();
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
        };
    };

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