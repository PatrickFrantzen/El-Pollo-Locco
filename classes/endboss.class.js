class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;

    offset = {
        top: 0,
        left: 0,
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
        this.animate();
    }

    animate() {

        if (this.isDead()) {
            this.deadInterval = setStoppableInterval(this.dead.bind(this), 150);
            clearInterval(this.hurtInterval);
        } else if (this.isHurt()) {
            this.hurtInterval = setStoppableInterval(this.hurt.bind(this), 150);
            clearInterval(this.attackInterval);
        } else if (this.energy <= 100) {
            this.attackInterval = setStoppableInterval(this.attack.bind(this), 150);
            clearInterval(this.playInterval);
        } else {
            this.playInterval = setStoppableInterval(this.play.bind(this), 150);
        };
        
        /*setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.dead_Images);
            }else if (this.isHurt()) {
                this.playAnimation(this.hurt_Images);
            }else if (this.energy <= 100) {
                this.playAnimation(this.attack_Images);
            } else {
                this.playAnimation(this.alert_Images);
            }
        }, 150);*/
    }

    dead() {
        this.playAnimation(this.dead_Images);
    }

    hurt() {
        this.playAnimation(this.hurt_Images);
    }

    attack() {
        if (this.energy <= 100) {
            this.playAnimation(this.attack_Images);
        }
    }

    alert() {
        this.playAnimation(this.alert_Images);
    }
}