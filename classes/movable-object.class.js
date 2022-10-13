class MovableObject {
    x = 0;
    y = 300;
    img;
    height = 175;
    width = 100;

    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image') <img id="image" src>
        this.img.src = path;
    };


    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {
        
    }
}