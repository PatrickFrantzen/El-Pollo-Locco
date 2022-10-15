class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 150;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
    
        this.x = 0 + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.x -= 0.15;
        }, 1000 / 60);
    }
}