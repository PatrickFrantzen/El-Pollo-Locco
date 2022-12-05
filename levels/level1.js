backgroundnumberIsEven=true;
let evenBackgrounds=['img/5_background/layers/air.png','img/5_background/layers/3_third_layer/2.png','img/5_background/layers/2_second_layer/2.png', 'img/5_background/layers/1_first_layer/2.png'];
let oddBackgrounds = ['img/5_background/layers/air.png','img/5_background/layers/3_third_layer/1.png','img/5_background/layers/2_second_layer/1.png', 'img/5_background/layers/1_first_layer/1.png'];
let enemies = [];
let endboss = [];
let clouds = [];
let background = [];
let coins = [];
let bottles = [];
let enemiePosition_x = 400;
let numberOfEnemies = 15;
let cloudPosition_x = -719;
let numberOfClouds = 15;
let backgroundPosition_x = -719;
let numberOfBackgrounds = 7;
let coinPosition_x = 300;
let coinPosition_y = 350;
let numberOfCoins = 10;
let allCoins = 25;
let bottlePosition_x = 300;
let numberOfBottles = 7;
let level1;


function initLevel() {
level1 = new Level(
   createLevelEnemies(),
   createLevelEndboss(),
   createLevelClouds(),
   createLevelBackground(),
   createLevelCoins(),
   createLevelBottles(),
);
}

function createLevelEndboss(){
    endboss.push(new Endboss());
    return endboss;
}

function createLevelEnemies(){
    for (let i = 0; i < numberOfEnemies; i++) {
        let chicken = new Chicken('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', enemiePosition_x);
        enemies.push(chicken);
        enemiePosition_x = enemiePosition_x + Math.random() * 550;
    }
    return enemies;
}

function createLevelClouds() {
    for (let i = 0; i < numberOfClouds; i++) {
        let cloud = new Cloud('img/5_background/layers/4_clouds/1.png', cloudPosition_x);
        clouds.push(cloud);
        cloudPosition_x = cloudPosition_x + 719;
    }
    return clouds;
}

function createLevelBackground() {
    for (let i = 0; i < numberOfBackgrounds; i++) {
        if (backgroundnumberIsEven == true) {
            getEvenBackgrounds();
        }else{
            getOddBackgrounds();
        }
    }
    return background;
}

function getEvenBackgrounds() {
    for (let j = 0; j < evenBackgrounds.length; j++) {
        let evenBackground = new BackgroundObject(evenBackgrounds[j], backgroundPosition_x);
        background.push(evenBackground);   
    }
    backgroundnumberIsEven = false;
    backgroundPosition_x = backgroundPosition_x + 719;
}

function getOddBackgrounds() {
    for (let k = 0; k < oddBackgrounds.length; k++) {
        let oddBackground = new BackgroundObject(oddBackgrounds[k], backgroundPosition_x);
        background.push(oddBackground);
    }
    backgroundnumberIsEven = true;
    backgroundPosition_x = backgroundPosition_x + 719;
}

function createLevelCoins() {
    getCoinArc(500, 200);
    getCoinArc(1500, 200);
    getCoinArc(2500, 200);
    for (let i = 0; i < numberOfCoins; i++) {
        let coin = new Coin('img/8_coin/coin_1.png', coinPosition_x, coinPosition_y);
        coins.push(coin);
        coinPosition_x = coinPosition_x + Math.random() * 500;
    }
    return coins;
}

function getCoinArc(Arc_x, Arc_y) {
    let coinArcPosition_x = Arc_x;
    let coinArcPosition_y = Arc_y;
    getUpwardsArc(coinArcPosition_x, coinArcPosition_y);
}

function getUpwardsArc(coinArcPosition_x, coinArcPosition_y) {
    for (let i = 0; i < 2; i++) {
        let coin = new Coin ('img/8_coin/coin_1.png', coinArcPosition_x, coinArcPosition_y);
        coins.push(coin);
        coinArcPosition_x = coinArcPosition_x + 75;
        coinArcPosition_y = coinArcPosition_y - 50;
    }
    getDownwardsArc(coinArcPosition_x, coinArcPosition_y);
}

function getDownwardsArc(coinArcPosition_x, coinArcPosition_y) {
    for (let i = 0; i < 3; i++) {
        let coin = new Coin ('img/8_coin/coin_1.png', coinArcPosition_x, coinArcPosition_y);
        coins.push(coin);
        coinArcPosition_x = coinArcPosition_x + 75;
        coinArcPosition_y = coinArcPosition_y + 50;
} 
}

function createLevelBottles(){
    for (let i = 0; i < numberOfBottles; i++) {
        let bottle = new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', bottlePosition_x);
        bottles.push(bottle);
        bottlePosition_x = bottlePosition_x + Math.random() + 400;
    }
    return bottles;
}