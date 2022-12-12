class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 150;


    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.x = x + Math.random() * 500;
    }
}