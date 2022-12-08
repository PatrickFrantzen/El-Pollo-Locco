class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;
    x = 3000;
    endbossCounter = 0;
    alive = true;

    offset = {
        top: 150,
        left: 50,
        right: 0,
        bottom: 0
    };
    

    alert_Images = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    attack_Images = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    hurt_Images = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    dead_Images = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ]

    constructor() {
        super().loadImage(this.alert_Images[0]);
        this.loadImages(this.alert_Images);
        this.loadImages(this.attack_Images);
        this.loadImages(this.hurt_Images);
        this.loadImages(this.dead_Images);
        this.x = 3000;
        this.speed = 5;
        this.animate();
    }

    animate() {
        this.playInterval = setStoppableInterval(this.play.bind(this), 125);
        
    }

    play() {
        if (this.isDead() && this.endbossCounter <= 14) {
            this.dead();
        } else if (this.isDead() && this.endbossCounter > 14) {
            this.deadEndscreen();
        }else if (this.isHurt()) {
            this.hurt();
        }else if (this.energy < 100) {
            this.attack();
            this.move();
        } else {
            this.alert();
        }
    }

    dead() {
            this.playAnimation(this.dead_Images);
            this.endbossCounter++;
            this.alive = false;
    }

    deadEndscreen() {
        this.loadImage(this.dead_Images[2]);
        stopGame();
        winOutroscreen();
    }

    hurt() {
        this.playAnimation(this.hurt_Images);
    }

    attack() {
            this.playAnimation(this.attack_Images);
    }

    alert() {
        this.playAnimation(this.alert_Images);
    }

    move() {
        this.moveLeft();
    }
}