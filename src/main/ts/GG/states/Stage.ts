import {Grid} from "../map/Grid";
import {Size} from "../utils/Size";
import {Preload} from "../game/Preload";
import {CellSprite} from "../sprites/CellSprite";
import {Utils} from "../utils/Utils";

export class Stage extends Phaser.State {
    cells: CellSprite[];
    grid: Grid;
    colors: string[];

    preload() {
        Preload.images(this.game);
    }

    create() {
        this.cells = [];
        this.grid = new Grid(new Size(640, 360), Utils.getRandomInt(2, 320), Utils.getRandomInt(2, 180));
        this.colors = ['Purple', 'Red', 'Yellow', 'Blue', 'LightBlue', 'White'];

        for(let i = 0; i < this.grid.cellsByIndex.length; i++) {
            let cell = new CellSprite(this.game, this.grid.cellsByIndex[i], this.colors);
            this.cells.push(cell);
            this.add.existing(cell);
        }
    }



}

