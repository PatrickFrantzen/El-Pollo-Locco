class BackgroundObject extends MovableObject {
x = 0;
y = 0;
width = 720;
height = canvasheight;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = canvasheight - this.height;
    }
}