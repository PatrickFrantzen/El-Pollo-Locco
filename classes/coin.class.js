class Coin extends MovableObject {
    y = 350;
    height = 100;
    width = 75;
    Coin_Images = [
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
        this.loadImages(this.Coin_Images);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.Coin_Images);
        }, 400);

    }
}