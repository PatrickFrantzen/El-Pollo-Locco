class MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed= 0.15;
    otherDirection = false;

    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image') <img id="image" src>
        this.img.src = path;
    };

    /**
     * 
     * @param {Array} arr  - ['img/image1', 'img/image2',...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
        
    }


    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // % gibt den Rest einer Dividierung zurück
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}