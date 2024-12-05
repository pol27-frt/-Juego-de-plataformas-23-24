controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Fantasma.isHittingTile(CollisionDirection.Bottom)) {
        Fantasma.vy = -131
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Fantasma.setImage(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel1`)
    tiles.placeOnTile(Fantasma, tiles.getTileLocation(0, 11))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Fantasma.setImage(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnTile(Fantasma, tiles.getTileLocation(0, 11))
})
let Fantasma: Sprite = null
Fantasma = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Fantasma, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(Fantasma, tiles.getTileLocation(0, 11))
scene.cameraFollowSprite(Fantasma)
Fantasma.ay = 131
info.setLife(3)
game.onUpdate(function () {
    if (Fantasma.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava0)) {
        Fantasma.setPosition(0, 0)
        info.changeLifeBy(-1)
    }
})
