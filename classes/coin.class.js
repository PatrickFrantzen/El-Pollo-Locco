class Coin extends MovableObject {
    y = 350;
    height = 100;
    width = 75;
    allImages = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
    


    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.loadImages(this.allImages);
        this.x = x + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.allImages);
        }, 400);

    }
}