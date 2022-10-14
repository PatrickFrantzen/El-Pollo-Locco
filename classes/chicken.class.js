class Chicken extends MovableObject {
 
constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')

    this.x = 200 + Math.random() * 500; // Math.random = zufällige Zahl zwischen 0 und 1, mulitpliziert mit 500 ergibt ein Wert zwischen 200 und 700
}

}