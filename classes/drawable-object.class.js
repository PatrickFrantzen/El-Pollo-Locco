class DrawableObject {
    x = 120;
    height = 250;
    width = 150;
    img;
    imageCache = {};
    currentImage = 0;


        //loadImage('img/test.png')
        loadImage(path) {
            this.img = new Image(); //this.img = document.getElementbyId('image') <img id="image" src>
            this.img.src = path;
        };
    
        draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

        /**
         * to draw a Frame around every object for debugging purposes
         * @param {string} ctx 
         */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Coin || this instanceof Bottle || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        };
    }

}