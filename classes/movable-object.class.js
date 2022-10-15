class MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 150;
    imageCache = {};
    

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
            this.imageCache[path] = path;
        })
        
    }


    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {
        
    }
}