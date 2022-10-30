class Bottle extends MovableObject {
    y = 350;
    height = 100;
    width = 75;
    allImages = [
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
    
    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.loadImages(this.allImages);
        this.x = x;
    }
}