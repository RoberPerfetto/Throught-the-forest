function createdPlayerSheet() {
    ssheet = new PIXI.BaseTexture.from(app.loader.resources["jim"].url);
    let w = 30;
    let h = 70;

    playerSheet["standWest"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(0, 142, w, h))
    ];
    playerSheet["standEast"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(0, 215, w, h))
    ];
             
    playerSheet["walkWest"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w+2, 142, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(2 * w+8, 142, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(3 * w+6, 142, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w+7, 142, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(5 * w+12, 142, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w+10, 142, w, h))
    ];
    playerSheet["walkEast"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w+2, 215, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(2 * w+8, 215, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(3 * w+6, 215, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w+7, 215, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(5 * w+12, 215, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w+10, 215, w, h))
    ];
    
}

function createPlayer() {
    player = new PIXI.AnimatedSprite(playerSheet.standEast);
    player.anchor.set(1,0.95);
    player.animationSpeed = .1;
    player.loop = true;
    player.x = 100;
    player.y = 580;
    player.vy = 0;
    player.scale.x = 2;
    player.scale.y = 2;
    app.stage.addChild(player);
    player.play();
}

function jumpPlayer() {

    player.y += player.vy;
    /*if(player.y < 450) {
        player.vy = +6;
    } */
}
