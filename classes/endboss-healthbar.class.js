class Endbosshealthbar extends Statusbar {

    width = 200;
    height = 60;


    HEALTH_IMAGES =[
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/2_statusbar_endboss/green.png'
    ];

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.loadImages(this.HEALTH_IMAGES);
        this.x = x;
        this.y = y;
        this.setPercentage(100, this.HEALTH_IMAGES);
    }

}