class BackgroundObject extends MovableObject {
x = 0;
y = 0;
width = 720;
height = 500;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    
        //this.x = 200 + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
    }
}

//