import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

function Game() {
    const gameRef = useRef(null);
    const phaserGame = useRef(null);

    useEffect(() => {
        class MyScene extends Phaser.Scene {
            constructor() {
                super({ key: "MyScene" });
            }
            preload() {
                this.load.tilemapTiledJSON("map", "assets/PortfolioMap.json");

                this.load.image("boat", "assets/Boats.png");
                this.load.image("bridge", "assets/Bridge.png");
                this.load.image("Flowers", "assets/Flowers.png");
                this.load.image(
                    "Grass_tiles",
                    "assets/Grass_Hill_Tiles_v2.png"
                );
                this.load.image("sign_posts_writing", "assets/SignPosts.png");
                this.load.image("trees", "assets/Trees.png");
                this.load.image("water", "assets/Water.png");
                this.load.image("wood_door", "assets/WoodDoor.png");
                this.load.image("Wood_house", "assets/WoodHouse.png");
                this.load.image(
                    "playerTexture",
                    "assets/Character-base-front.png"
                );
            }

            create() {
                const map = this.make.tilemap({ key: "map" });

                const tilesets = {
                    Grass_tiles: map.addTilesetImage(
                        "Grass_tiles",
                        "Grass_tiles"
                    ),
                    water: map.addTilesetImage("water", "water"),
                    Wood_house: map.addTilesetImage("Wood_house", "Wood_house"),
                    bridge: map.addTilesetImage("bridge", "bridge"),
                    boat: map.addTilesetImage("boat", "boat"),
                    Flowers: map.addTilesetImage("Flowers", "Flowers"),
                    sign_posts_writing: map.addTilesetImage(
                        "sign_posts_writing",
                        "sign_posts_writing"
                    ),
                    trees: map.addTilesetImage("trees", "trees"),
                    wood_door: map.addTilesetImage("wood_door", "wood_door"),
                };

                map.createLayer("water", tilesets.water, 0, 0);

                map.createLayer("Tile Layer 1", tilesets.Grass_tiles, 0, 0);

                map.createLayer("floor", tilesets.Wood_house, 0, 0);

                map.createLayer(
                    "building_layer",
                    [tilesets.Wood_house, tilesets.bridge, tilesets.wood_door],
                    0,
                    0
                );

                map.createLayer(
                    "objects",
                    [
                        tilesets.boat,
                        tilesets.Flowers,
                        tilesets.sign_posts_writing,
                        tilesets.trees,
                    ],
                    0,
                    0
                );

                // Create player and camera follow
                this.player = this.physics.add.sprite(
                    200,
                    200,
                    "playerTexture"
                );
                this.player.setDisplaySize(12, 12);
                this.cameras.main.startFollow(this.player, true, 1, 1);
                this.cameras.main.setBounds(
                    0,
                    0,
                    map.widthInPixels,
                    map.heightInPixels
                );

                // Zoom calc
                const tileWidth = map.tileWidth;
                const desiredVisibleTilesX = 12;
                const zoom =
                    this.scale.width / (desiredVisibleTilesX * tileWidth);
                this.cameras.main.setZoom(zoom);

                // Cursor keys
                this.cursors = this.input.keyboard.createCursorKeys();

                // Resize support
                this.scale.on("resize", (gameSize) => {
                    const newZoom =
                        gameSize.width / (desiredVisibleTilesX * tileWidth);
                    this.cameras.main.setZoom(newZoom);
                });
            }

            update() {
                const speed = 100;
                if (this.cursors.left.isDown) {
                    this.player.x -= (speed * this.game.loop.delta) / 1000;
                } else if (this.cursors.right.isDown) {
                    this.player.x += (speed * this.game.loop.delta) / 1000;
                }
                if (this.cursors.up.isDown) {
                    this.player.y -= (speed * this.game.loop.delta) / 1000;
                } else if (this.cursors.down.isDown) {
                    this.player.y += (speed * this.game.loop.delta) / 1000;
                }
            }
        }

        if (!phaserGame.current) {
            phaserGame.current = new Phaser.Game({
                type: Phaser.AUTO,
                parent: gameRef.current,
                backgroundColor: "#000000",
                pixelArt: true,
                scale: {
                    mode: Phaser.Scale.RESIZE,
                    autoCenter: Phaser.Scale.CENTER_BOTH,
                    width: "100%",
                    height: "100%",
                },
                physics: {
                    default: "arcade",
                    arcade: {
                        debug: false,
                    },
                },
                scene: MyScene,
            });
        }

        return () => {
            if (phaserGame.current) {
                phaserGame.current.destroy(true);
                phaserGame.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={gameRef}
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                padding: 0,
                overflow: "hidden",
            }}
        />
    );
}

export default Game;
