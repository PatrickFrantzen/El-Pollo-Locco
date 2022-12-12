class Chicken extends MovableObject {
    y = 350;
    height = 75;
    width = 50;
    energy = 25;
    alive = true;
    minSpeed = 0.8;
    maxSpeed = 3;

    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed);
    speed = this.animationSpeed / 2;
    
    Walking_Images = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    Dead_Images = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    offset = {
        top: 35,
        left: 25,
        right: 25,
        bottom: 35
    };



    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.loadImages(this.Walking_Images);
        this.loadImages(this.Dead_Images);
        this.x = x + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
        this.animate();
    }

    /**
     * creates an interval for moving and animation of chicken and binds "this" keyword to the provided value, so it does not get lost when providing to the setStoppableInterval function
    */
    animate() {     
        this.playInterval = setStoppableInterval(this.play.bind(this), 100);
        this.moveInterval = setStoppableInterval(this.move.bind(this), 1000 / 60);
    }

    /**
     * normal chicken is always moving left
     */
    move() {
        this.moveLeft();
    }

    /**
     * if the chicken is alive the walking animation is playing and if it is dead the dead image is loaded.
     */
    play() {
        if (this.alive == true) {
            this.playAnimation(this.Walking_Images);
        } else {
            this.loadImage(this.Dead_Images);
            clearInterval(this.playInterval);
            clearInterval(this.moveInterval);
        }
    }
}