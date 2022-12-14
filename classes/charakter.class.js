class Character extends MovableObject {

    currentImage = 0;
    y = 180;
    world;
    speed = 4;
    offset = {
        top: 120,
        left: 50, //70
        right: 50, //50
        bottom: 20 //20
    };

    walkingImages = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    jumpingImages = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    hurtImages = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    deadImages = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    idleImages = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    longIdleImages = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];



    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.walkingImages);
        this.loadImages(this.jumpingImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.deadImages);
        this.loadImages(this.idleImages);
        this.loadImages(this.longIdleImages);
        this.applyGravity();
        this.animate();

    }

/**
 * creates an interval for moving and animation of character and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
 */
    animate() {
        this.walkingInterval = setStoppableInterval(this.walking.bind(this), 1000 / 60);
        this.animationInterval = setStoppableInterval(this.animations.bind(this), 70);
    }

    /**
     * Character moves left and right, walking music stops when Right or Left is not pressed any more
     */
    walking() {
        this.world.walkingSound.pause();
        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
            this.movingRight();
        };
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.movingLeft();
        };
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            playSound(this.world.jumpingSound);
        };
        this.world.cameraX= -this.x + 100;
    }
    /**
     *Different Animation when Character is dead, hurt, jumping, walking and idle 
     */
    animations() {
        if (this.isDead()) {
            this.playAnimation(this.deadImages);
            stopGame();
            lostOutroscreen();
        } else if (this.isHurt()) {
            this.playAnimation(this.hurtImages);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.jumpingImages);
        } else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.x < this.world.level.levelEndX) {
            this.playAnimation(this.walkingImages);
        } else {
            this.checkForIdle()
        }
    }

    /**
     * After every move a timer starts and it is checked if the character plays idle animations
     */
    checkForIdle() {
        if (this.isIdle() <= 4) {
            this.playAnimation(this.idleImages);
        } else this.playAnimation(this.longIdleImages);

    }

    /**
     * when moving right, the direction is set to right direction and sound is playing
     */
    movingRight() {
        this.moveRight();
        this.otherDirection = false;
        this.playSoundWhileMoving();
    }

    /**
     * when moving left, the direction is changed and sound is playing
     */
    movingLeft() {
        this.moveLeft();
        this.otherDirection = true;
        this.playSoundWhileMoving();
    }

    /**
     * when the character moves and is not jumping the walking sound is playing
     */
    playSoundWhileMoving() {
        if (!this.isAboveGround()) {
            playSound(this.world.walkingSound)
        };
    }

}