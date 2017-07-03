import {Cell} from "./Cell";
import {Size} from "../utils/Size";

export class Grid {
    size: Size;
    columns: number;
    rows: number;

    cellsSize: Size;
    cells: Cell[][];
    cellsByIndex: Cell[];

    constructor(size, columns, rows) {
        this.size = size;
        this.columns = columns;
        this.rows = rows;

        this.cellsSize = new Size(size.width / columns, size.height / rows);
        this.cells = [];
        let index = 0;
        this.cellsByIndex = [];
        for (let x = 0; x < columns; x++) {
            this.cells[x] = [];
            for (let y = 0; y < rows; y++) {
                this.cells[x][y] = new Cell(this.cellsSize, x, y, index);
                this.cellsByIndex[index] = this.cells[x][y];
                index++;
            }
        }
    }

}
