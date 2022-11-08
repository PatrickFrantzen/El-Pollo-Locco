class Coinbar extends Statusbar {
    width = 200;
    height = 60;


    COLLECTED_COINS_IMAGES =[
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.loadImages(this.COLLECTED_COINS_IMAGES);
        this.x = x;
        this.y = y;
        this.setPercentage(0, this.COLLECTED_COINS_IMAGES);
    }
}