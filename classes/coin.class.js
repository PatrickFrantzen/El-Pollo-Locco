class Coin extends MovableObject {
    y = 350;
    height = 100;
    width = 75;
    coinImages = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
    offset = {
        top: 15,
        left: 10,
        right: 10,
        bottom: 15
    };
    
    constructor(imagePath, x, y) {
        super().loadImage(imagePath)
        this.loadImages(this.coinImages);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Interval to animate coins
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.coinImages);
        }, 400);

    }
}