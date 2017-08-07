import {Menu} from "./states/Menu"
import {GameOver} from "./states/GameOver";
import {Stage} from "./states/Stage";

export class Game extends Phaser.Game {
    app: CHAOTIVE.FW.APP.App;

    constructor(app) {
        super(854, 480, Phaser.AUTO, "game");

        this.app = app;

        this.state.add('Menu', Menu, false);
        this.state.add('GameOver', GameOver, false);
        this.state.add('Stage', Stage, false);

        this.state.start('Stage');

        console.log("Grid game started...");
    }
}