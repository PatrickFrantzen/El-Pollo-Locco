function preloadImgs() {
    document.getElementById('hiddenImg').innerHTML = renderImages();
}

function renderImages() {
    return `
    <img src="img/2_character_pepe/1_idle/idle/I-1.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-2.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-3.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-4.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-5.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-6.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-7.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-8.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-9.png"></img>
    <img src="img/2_character_pepe/1_idle/idle/I-10.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-11.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-12.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-13.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-14.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-15.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-16.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-17.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-18.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-19.png"></img>
    <img src="img/2_character_pepe/1_idle/long_idle/I-20.png"></img>
    <img src="img/2_character_pepe/2_walk/W-21.png"></img>
    <img src="img/2_character_pepe/2_walk/W-22.png"></img>
    <img src="img/2_character_pepe/2_walk/W-23.png"></img>
    <img src="img/2_character_pepe/2_walk/W-24.png"></img>
    <img src="img/2_character_pepe/2_walk/W-25.png"></img>
    <img src="img/2_character_pepe/2_walk/W-26.png"></img>
    <img src="img/2_character_pepe/3_jump/J-31.png"></img>
    <img src="img/2_character_pepe/3_jump/J-32.png"></img>
    <img src="img/2_character_pepe/3_jump/J-33.png"></img>
    <img src="img/2_character_pepe/3_jump/J-34.png"></img>
    <img src="img/2_character_pepe/3_jump/J-35.png"></img>
    <img src="img/2_character_pepe/3_jump/J-36.png"></img>
    <img src="img/2_character_pepe/3_jump/J-37.png"></img>
    <img src="img/2_character_pepe/3_jump/J-38.png"></img>
    <img src="img/2_character_pepe/3_jump/J-39.png"></img>
    <img src="img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"></img>
    <img src="img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"></img>
    <img src="img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"></img>
    <img src="img/3_enemies_chicken/chicken_normal/2_dead/dead.png"></img>
    <img src="img/3_enemies_chicken/chicken_small/1_walk/1_w.png"></img>
    <img src="img/3_enemies_chicken/chicken_small/1_walk/2_w.png"></img>
    <img src="img/3_enemies_chicken/chicken_small/1_walk/3_w.png"></img>
    <img src="img/3_enemies_chicken/chicken_small/2_dead/dead.png"></img>

    <img src="img/5_background/layers/1_first_layer/1.png"></img>
    <img src="img/5_background/layers/1_first_layer/2.png"></img>

    <img src="img/5_background/layers/2_second_layer/1.png"></img>
    <img src="img/5_background/layers/2_second_layer/2.png"></img>

    <img src="img/5_background/layers/3_third_layer/1.png"></img>
    <img src="img/5_background/layers/3_third_layer/2.png"></img>

    <img src="img/5_background/layers/4_clouds/1.png"></img>
    <img src="img/5_background/layers/4_clouds/2.png"></img>

    <img src="img/5_background/layers/air.png"></img>

    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png"></img>

    <img src="img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"></img>

    <img src="img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png"></img>
    <img src="img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"></img>

    <img src="img/6_salsa_bottle/1_salsa_bottle_on_ground.png"></img>
    <img src="img/6_salsa_bottle/2_salsa_bottle_on_ground.png"></img>

    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png"></img>
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png"></img>
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png"></img>
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png"></img>
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png"></img>
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png"></img>

    <img src="img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png"></img>
    <img src="img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png"></img>
    <img src="img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png"></img>
    <img src="img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png"></img>
    <img src="img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png"></img>
    <img src="img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png"></img>

    <img src="img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png"></img>
    <img src="img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png"></img>
    <img src="img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png"></img>
    <img src="img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png"></img>
    <img src="img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png"></img>
    <img src="img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png"></img>

    <img src="img/7_statusbars/2_statusbar_endboss/green.png"></img>

    <img src="img/7_statusbars/3_icons/icon_coin.png"></img>

    <img src="img/7_statusbars/3_icons/icon_salsa_bottle.png"></img>

    <img src="img/8_coin/coin_1.png"></img>
    <img src="img/8_coin/coin_2.png"></img>

    <img src="img/10_icons/audio.png"></img>
    <img src="img/10_icons/jump.png"></img>
    <img src="img/10_icons/left.png"></img>
    <img src="img/10_icons/mute.png"></img>
    <img src="img/10_icons/right.png"></img>
    <img src="img/10_icons/throw.png"></img>
    `
    
}