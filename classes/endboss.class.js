class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;

    allImages = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor() {
        super().loadImage(this.allImages[0]);
        this.loadImages(this.allImages);
        this.x = 3000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.allImages);
        }, 200);
    }
}