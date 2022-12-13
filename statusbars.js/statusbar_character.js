let healthbar;
let coinbar;
let bottlebar;
let bossHealthbar;

const CharakterStatusbars = new Statusbar(
    createHealthbar(),
    createCoinbar(),
    createBottlebar(),
    createBossHealtbar(),
);

function createHealthbar() {
    healthbar = new Healthbar('img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png', 0, 0);
    return healthbar;
}

function createCoinbar() {
    coinbar = new Coinbar('img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png', 0, 60);
    return coinbar;
}

function createBottlebar() {
    bottlebar = new Bottlebar('img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png', 0, 120);
    return bottlebar;
}

function createBossHealtbar() {
bossHealthbar = new Endbosshealthbar('img/7_statusbars/2_statusbar_endboss/green.png', 500, 0);
return bossHealthbar;
}