function hitTestRectangle(r1, r2) {
    //Define the variables we'll need to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    r1.posX = (r1.x + r1.width) / 2;
    r2.posX = (r2.x + r2.width) - 10;

    console.log('r1.posX:'+Math.abs(r1.posX)+' - r2.posX:'+Math.abs(r2.posX));
    //console.log('vy:'+Math.abs(r1.posX)+' - combinedHalfHeights:'+combinedHalfHeights);
    //console.log('player.y:'+Math.abs(r1.y)+' - enemy.y:'+r2.y);

    //Check for a collision on the x axis
    if (Math.abs(r1.posX) > r2.x && Math.abs(r1.posX) < r2.posX) {

        //A collision might be occurring. Check for a collision on the y axis
        if (Math.abs(r1.y) >= r2.y) {

            //There's definitely a collision happening
            hit = true;
        } else {

            //There's no collision on the y axis
            hit = false;
        }
    } else {

    //There's no collision on the x axis
    hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;
};

/*
//Define the variables we'll need to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.y + r2.height / 2;

    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    console.log('vx:'+Math.abs(vx)+' - combinedHalfWidths:'+combinedHalfWidths);
    console.log('vy:'+Math.abs(vy)+' - combinedHalfHeights:'+combinedHalfHeights);
    console.log('player.y:'+Math.abs(r1.y)+' - enemy.y:'+r2.y);
*/