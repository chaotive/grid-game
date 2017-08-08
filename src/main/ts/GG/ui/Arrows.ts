import Sprite = Phaser.Sprite;
import {Utils} from "../utils/Utils";
import {CellSprite} from "../sprites/CellSprite";
import {Grid} from "../map/Grid";

export class Arrows {
    stage: Phaser.State;
    grid: Grid;
    player: CellSprite;

    left: Sprite;
    right: Sprite;
    up: Sprite;
    down: Sprite;

    constructor (stage, grid, player) {
        this.stage = stage;
        this.grid = grid;
        this.player = player;

        this.left = this.createButton("Left", 120, 370);
        this.right = this.createButton("Right", 220, 370);
        this.up = this.createButton("Up", 320, 370);
        this.down = this.createButton("Down", 420, 370);
    }

    createButton(direction: string, x: number, y: number): Sprite {
        let button = this.stage.game.add.sprite(x, y, 'directionalArrows' + direction);
        button.inputEnabled = true;
        button.events.onInputDown.add(this.action_playerMove, this, undefined, direction);
        return button;
    }

    action_playerMove(obj1, obj2, direction: string) {
        let x = this.player.cell.grid.x;
        let y = this.player.cell.grid.y;
        switch (direction) {
            case "Left":    if (x > 0) this.player.move(this.grid.cells[x-1][y]); break;
            case "Right":   if (x < this.grid.columns - 1) this.player.move(this.grid.cells[x+1][y]); break;
            case "Up":      if (y < this.grid.rows - 1) this.player.move(this.grid.cells[x][y+1]); break;
            case "Down":    if (y > 0) this.player.move(this.grid.cells[x][y-1]); break;
        }
    }

}
