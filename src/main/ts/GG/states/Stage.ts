import {Grid} from "../map/Grid";
import {Size} from "../utils/Size";
import {Preload} from "../game/Preload";
import {CellSprite} from "../sprites/CellSprite";
import {Utils} from "../utils/Utils";

export class Stage extends Phaser.State {
    cells: CellSprite[];
    grid: Grid;
    colors: string[];

    private currentColumn: number;

    preload() {
        Preload.images(this.game);
    }

    create() {
        this.grid = new Grid(new Size(640, 360), Utils.getRandomInt(2, 320), Utils.getRandomInt(2, 180));
        this.colors = ['Purple', 'Red', 'Yellow', 'Blue', 'LightBlue', 'White'];
        this.currentColumn = 0;

        this.cells = [];
        for(let i = 0; i < this.grid.cellsByIndex.length; i++) {
            let cell = new CellSprite(this.game, this.grid.cellsByIndex[i], this.colors);
            this.cells.push(cell);
            this.add.existing(cell);
        }
    }

    update() {
        if(this.currentColumn == this.grid.columns) this.currentColumn = 0;

        let columnCells = this.cells.filter(c =>
            c.cell.grid.x == this.currentColumn
        );

        columnCells.map(c =>
            c.tint = Math.random() * 0xffffff
        );

        this.currentColumn++;
    }

}

