backgroundnumberIsEven=true;
let evenBackgrounds=['img/5_background/layers/air.png','img/5_background/layers/3_third_layer/2.png','img/5_background/layers/2_second_layer/2.png', 'img/5_background/layers/1_first_layer/2.png'];
let oddBackgrounds = ['img/5_background/layers/air.png','img/5_background/layers/3_third_layer/1.png','img/5_background/layers/2_second_layer/1.png', 'img/5_background/layers/1_first_layer/1.png'];
let enemies = [];
let endboss = [];
let clouds = [];
let background = [];
let coins = [];
let bottles = [];
let enemiePositionX = 400;
let numberOfEnemies = 15;
let cloudPositionX = -719;
let numberOfClouds = 15;
let backgroundPositionX = -719;
let numberOfBackgrounds = 7;
let coinPositionX = 300;
let coinPositionY = 350;
let numberOfCoins = 10;
let allCoins = 25;
let bottlePositionX = 300;
let numberOfBottles = 10;
let level1;


/**
 * initiates the level with loading all objects and positions
 */
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

/**
 * one Endboss is created and pushed into an array
 * @returns the endboss of the game
 */
function createLevelEndboss(){
    endboss.push(new Endboss());
    return endboss;
}

/**
 * depending on number of Enemies small or normal chickens and their position in the game are created and pushed into the enemies array
 * @returns all enemies of the level
 */
function createLevelEnemies(){
    for (let i = 0; i < numberOfEnemies; i++) {
        if (i % 2 == 0) {
            let chicken = new Chicken('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', enemiePositionX);
            enemies.push(chicken);
            enemiePositionX = enemiePositionX + Math.random() * 550; 
        } else {
            let smallchicken = new SmallChicken('img/3_enemies_chicken/chicken_small/1_walk/1_w.png', enemiePositionX);
            enemies.push(smallchicken);
            enemiePositionX = enemiePositionX + Math.random() * 550;
        };
    }
    return enemies;
}

/**
 * depending on numberOfClouds the clouds and the position are pushed into the cloud array
 * @returns all clouds of the game
 */
function createLevelClouds() {
    for (let i = 0; i < numberOfClouds; i++) {
        let cloud = new Cloud('img/5_background/layers/4_clouds/1.png', cloudPositionX);
        clouds.push(cloud);
        cloudPositionX = cloudPositionX + 719;
    }
    return clouds;
}

/**
 * depending on the number of Backgrounds an amount of even and uneven images of backgrounds are pushed into the background array
 * @returns all backgrounds of the game 
 */
function createLevelBackground() {
    for (let i = 0; i < numberOfBackgrounds; i++) {
        if (backgroundnumberIsEven == true) {
            getEvenBackgrounds();
        }else getOddBackgrounds();
    }
    return background;
}

function getEvenBackgrounds() {
    for (let j = 0; j < evenBackgrounds.length; j++) {
        let evenBackground = new BackgroundObject(evenBackgrounds[j], backgroundPositionX);
        background.push(evenBackground);   
    }
    backgroundnumberIsEven = false;
    backgroundPositionX = backgroundPositionX + 719;
}

function getOddBackgrounds() {
    for (let k = 0; k < oddBackgrounds.length; k++) {
        let oddBackground = new BackgroundObject(oddBackgrounds[k], backgroundPositionX);
        background.push(oddBackground);
    }
    backgroundnumberIsEven = true;
    backgroundPositionX = backgroundPositionX + 719;
}

/**
 * three arcs with fixed positions are created and then depening of numberofCoins the coins and their position are pushed into the coin array.
 * @returns all coins of the level
 */
function createLevelCoins() {
    getCoinArc(getRandomArbitrary(300, 600), getRandomArbitrary(100, 300));
    getCoinArc(getRandomArbitrary(1100, 1600), getRandomArbitrary(100, 300));
    getCoinArc(getRandomArbitrary(2100, 2600), getRandomArbitrary(100, 300));
    for (let i = 0; i < numberOfCoins; i++) {
        let coin = new Coin('img/8_coin/coin_1.png', coinPositionX, coinPositionY);
        coins.push(coin);
        coinPositionX = coinPositionX + Math.random() * getRandomArbitrary(400, 500);
        coinPositionY = getRandomArbitrary(100, 350);
    }
    return coins;
}

/**
 * an Coin Arc is created with fixed positions but random for every playthrough
 * @param {number} ArcX 
 * @param {number} ArcY 
 */
function getCoinArc(ArcX, ArcY) {
    let coinArcPositionX = ArcX;
    let coinArcPositionY = ArcY;
    getUpwardsArc(coinArcPositionX, coinArcPositionY);
}

function getUpwardsArc(coinArcPositionX, coinArcPositionY) {
    for (let i = 0; i < 2; i++) {
        let coin = new Coin ('img/8_coin/coin_1.png', coinArcPositionX, coinArcPositionY);
        coins.push(coin);
        coinArcPositionX = coinArcPositionX + 75;
        coinArcPositionY = coinArcPositionY - 50;
    }
    getDownwardsArc(coinArcPositionX, coinArcPositionY);
}

function getDownwardsArc(coinArcPositionX, coinArcPositionY) {
    for (let i = 0; i < 3; i++) {
        let coin = new Coin ('img/8_coin/coin_1.png', coinArcPositionX, coinArcPositionY);
        coins.push(coin);
        coinArcPositionX = coinArcPositionX + 75;
        coinArcPositionY = coinArcPositionY + 50;
} 
}

/**
 * depending on the number of bottles these bottles and their position are pushed into the bottles array
 * @returns all bottles of level
 */
function createLevelBottles(){
    for (let i = 0; i < numberOfBottles; i++) {
        let bottle = new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', bottlePositionX);
        bottles.push(bottle);
        bottlePositionX = bottlePositionX + getRandomArbitrary(100, 300);
    }
    return bottles;
}