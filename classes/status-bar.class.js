class Statusbar extends DrawableObject{
    healthbar;
    coinbar;
    bottlebar;
    bossHealthbar;
    percentage = 100;
    world;

    constructor(healthbar, coinbar, bottlebar, bossHealthbar) {
        super();
        this.healthbar = healthbar;
        this.coinbar = coinbar;
        this.bottlebar = bottlebar;
        this.bossHealthbar = bossHealthbar;
        
    }

    /**
     * function to load the correct image of a statusbar
     * @param {number} percentage 
     * @param {string} images 
     */
    setPercentage(percentage, images) {
        this.percentage = percentage;
        let path = images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * depending on the percentage a different image is selected
     * @returns a number
     */
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