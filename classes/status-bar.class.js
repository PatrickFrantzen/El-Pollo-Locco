class Statusbar extends DrawableObject{
    healthbar;
    coinbar;
    bottlebar;
    percentage = 100;
    world;

    constructor(healthbar, coinbar, bottlebar) {
        super();
        this.healthbar = healthbar;
        this.coinbar = coinbar;
        this.bottlebar = bottlebar;
        
    }

    setPercentage(percentage, images) {
        this.percentage = percentage;
        let path = images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80){
            return 4;
        } else if (this.percentage > 60){
            return 3;
        }else if (this.percentage > 40){
            return 2;
        }else if (this.percentage > 1){
            return 1;
        }else {
            return 0;
        }
    }
 }