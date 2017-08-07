import Sprite = Phaser.Sprite;
import {Utils} from "../utils/Utils";
import {CellSprite} from "../sprites/CellSprite";
import {Grid} from "../map/Grid";

export class Arrows {
    stage: Phaser.State;
    grid: Grid;
    player: CellSprite;

    button: Sprite;

    left: Sprite;
    right: Sprite;
    up: Sprite;
    down: Sprite;

    constructor (stage, grid, player) {
        this.stage = stage;
        this.grid = grid;
        this.player = player;

        this.button = this.stage.game.add.sprite(230, 90, 'startbutton');
        this.button.inputEnabled = true;
        this.button.events.onInputDown.add(this.action_playerMove,this);
    }

    action_playerMove() {
        let x = Utils.getRandomInt(0, this.grid.columns - 1);
        let y = Utils.getRandomInt(0, this.grid.rows - 1);
        this.player.move(this.grid.cells[x][y]);
    }

    // action_playerMoveLeft() {
    //     let x = Utils.getRandomInt(0, this.grid.columns - 1);
    //     let y = Utils.getRandomInt(0, this.grid.rows - 1);
    //     this.player.move(this.grid.cells[x][y]);
    // }

}
