class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();

    }

    setWorld() {
        this.character.world = this;
    }

    draw() {

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); 
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        

        //Draw() wird immer wieder ausgeführt, je nach Leistung der Graphikkarte
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    };

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(object) {
        if(object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if(object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }


}