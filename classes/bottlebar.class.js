class Bottlebar extends Statusbar {
    width = 200;
    height = 60;


    COLLECTED_BOTTLES_IMAGES =[
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.loadImages(this.COLLECTED_BOTTLES_IMAGES);
        this.x = x;
        this.y = y;
        this.setPercentage(0, this.COLLECTED_BOTTLES_IMAGES);
    }
}