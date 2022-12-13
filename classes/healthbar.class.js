class Healthbar extends Statusbar {

    width = 200;
    height = 60;


    healthImages =[
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.loadImages(this.healthImages);
        this.x = x;
        this.y = y;
        this.setPercentage(100, this.healthImages);
    }
}