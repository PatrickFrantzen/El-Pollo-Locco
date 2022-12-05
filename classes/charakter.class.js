class Character extends MovableObject {

    Walking_Images = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    Jumping_Images = [
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

    Hurt_Images = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    Dead_Images = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    Idle_Images = [
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

    Long_Idle_Images = [
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

    currentImage = 0;
    y = 180;
    world;
    speed = 4;
    walking_sound = new Audio('audio/running.mp3');
    throwing_sound = new Audio('audio/throwing.mp3');
    shattering_sound =new Audio('audio/broken_glass.mp3');
    pain_sound = new Audio('audio/pain.mp3')

    offset = {
        top: 120,
        left: 20,
        right: 20,
        bottom: 0
    };

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Walking_Images);
        this.loadImages(this.Jumping_Images);
        this.loadImages(this.Hurt_Images);
        this.loadImages(this.Dead_Images);
        this.loadImages(this.Idle_Images);
        this.loadImages(this.Long_Idle_Images);
        this.applyGravity();
        this.animate();
        
    }


    animate() {
        setInterval(() => {
            this.walking();
        }, 1000 / 60); 
        setInterval(() => {
            this.animations(); 
        }, 70);
    }


    walking() {
        this.walking_sound.pause();
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.walking_sound.play();
        };
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.walking_sound.play();
        };
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        };
        this.world.camera_x = -this.x + 100;
    }

    animations() {
        if (this.isDead()) {
            this.playAnimation(this.Dead_Images);
            stopGame();
            document.getElementById('lost').classList.remove('d-none');
            document.getElementById('lost').classList.add('outroscreen');
        }else if (this.isHurt()) {
            this.playAnimation(this.Hurt_Images);
            this.pain_sound.play();
        }else if (this.isAboveGround()) {
            this.playAnimation(this.Jumping_Images);
        }else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.x < this.world.level.level_end_x) {
            this.playAnimation(this.Walking_Images);
        }else {
            this.checkForIdle()
        }
    }

    checkForIdle() {
        if (this.isIdle() >= 10 && this.isIdle() <= 15) {
            this.playAnimation(this.Idle_Images); 
        } else if (this.isIdle() >= 15) {
            this.playAnimation(this.Long_Idle_Images);
        };
    }
}