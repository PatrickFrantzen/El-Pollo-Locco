class Chicken extends MovableObject {
    y = 350;
    height = 75;
    width = 50;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    


    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.loadImages(this.IMAGES_WALKING);
        this.x = x + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }


    animate() {

        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);

    }
}