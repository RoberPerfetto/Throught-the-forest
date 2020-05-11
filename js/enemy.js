function setTimeEnemy() {
    if(score > 100 * time_count) {
        time_enemy -= 5;
        time_count++;
        console.log("Velocidad time_enemy:"+time_enemy);
    }
}

function cretedEnemySheet() {

    esheet = new PIXI.BaseTexture.from(app.loader.resources["mouse"].url);
    let w = 54;
    let h = 18;

    enemySheet["run"] = [
        new PIXI.Texture(esheet, new PIXI.Rectangle(0 * w, 0, w, h)),
        new PIXI.Texture(esheet, new PIXI.Rectangle(1 * w, 0, w, h))
    ]
}

function createEnemy() {
    enemy = new PIXI.AnimatedSprite(enemySheet.run);
    enemy.anchor.set(0,0.5);
    enemy.animationSpeed = .25;
    enemy.loop = true;
    enemy.x = 800;
    enemy.y = 570;
    enemy.vy = 0;
    enemy.scale.x = 2;
    enemy.scale.y = 2;
    app.stage.addChild(enemy);
    enemy.play();
}

function moveEnemy() {
    enemy.x -= enemy.vx;   
}