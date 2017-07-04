import {Cell} from "../map/Cell";
import {Utils} from "../utils/Utils";

export class CellSprite extends Phaser.Sprite {
    cell: Cell;

    constructor(game, cell, colors) {
        let colorIndex = Utils.getRandomInt(0, colors.length - 1);
        super(game, cell.position.x, cell.position.y, 'cell' + colors[colorIndex]);

        this.width = cell.size.width;
        this.height = cell.size.height;
        this.cell = cell;
    }
}
