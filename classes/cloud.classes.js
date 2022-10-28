class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 150;


    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.x = x + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
        this.animate();
    }

    animate() {
        this.moveLeft();
    }


}