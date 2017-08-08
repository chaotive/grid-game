import {Cell} from "../map/Cell";
import {Utils} from "../utils/Utils";
import {Grid} from "../map/Grid";

export class CellSprite extends Phaser.Sprite {
    cell: Cell;
    blocked: boolean;

    constructor(game, cell, imageKey) {
        super(game, cell.position.x, cell.position.y, imageKey);

        this.cell = cell;
        this.blocked = false;

        this.width = cell.size.width;
        this.height = cell.size.height;
    }

    move (newCell: Cell) {
        if (!this.blocked) {
            this.blocked = true;
            console.log(this.blocked);

            let tween = this.game.add.tween(this).to({
                x: newCell.position.x, y: newCell.position.y
            }, 100);
            tween.onComplete.add(() => {
                this.cell = newCell;
                this.blocked = false;
                console.log(this.blocked);
            });
            tween.start();
        }
    }
}
