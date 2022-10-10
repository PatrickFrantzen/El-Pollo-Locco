class MovableObject {
    x = 0;
    y = 30;
    img;
    height = 125;
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