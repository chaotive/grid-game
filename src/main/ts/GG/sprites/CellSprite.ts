import {Cell} from "../map/Cell";
import {Utils} from "../utils/Utils";

export class CellSprite extends Phaser.Sprite {
    cell: Cell;

    constructor(game, cell, imageKey) {
        super(game, cell.position.x, cell.position.y, imageKey);

        this.width = cell.size.width;
        this.height = cell.size.height;
        this.cell = cell;
    }
}
