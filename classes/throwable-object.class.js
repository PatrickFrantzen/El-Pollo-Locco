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
        
        setStoppableInterval(this.moveOrSplash, 25);
        setInterval( () => {
            this.moveOrSplash();
        }, 25)
        setTimeout(() => {
            this.removeBottlefromArray();
        },3000);
    }

    moveOrSplash() {
        if (this.isAboveGround()) {
            this.x += 5;
        } else {
            this.splash();
        } 
    }

    splash() {
        this.stopSplash(intervalIds[0]);
        setInterval(() => {
            this.playAnimation(this.Splashing_Images);
        }, 250);
    }

    stopSplash(x){
        clearInterval(x);
    }



    /*throw() {
        this.speed_y = 30;
        this.applyGravity();
        
        this.IntervalId = setInterval( () => {
            this.moveOrSplash();
        }, 25)
        setTimeout(() => {
            this.removeBottlefromArray();
        },3000);
    }

    moveOrSplash() {
        if (this.isAboveGround()) {
            this.x += 5;
        } else {
            this.splash(this.IntervalId);
        } 
    }

    splash(x) {
        this.stopSplash(x);
        this.IntervalIdsplash = setInterval(() => {
            this.playAnimation(this.Splashing_Images);
        }, 250);
    }

    stopSplash(x){
        clearInterval(x);
    }*/

    removeBottlefromArray() {
        world.throwableObjects.splice(0,1);
    }
    
}