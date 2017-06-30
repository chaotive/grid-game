import {Cell} from "./Cell";

export class Grid {
    cellsSize: number;
    cells: Cell[][];
    cellsByIndex: Cell[];

    columns: number;
    rows: number;

    constructor(size, columns, rows) {
        this.cellsSize = size;
        this.columns = columns;
        this.rows = rows;

        this.cells = [];
        let index = 0;
        this.cellsByIndex = [];
        for (let x = 0; x < this.columns; x++) {
            this.cells[x] = [];
            for (let y = 0; y < this.rows; y++) {
                this.cells[x][y] = new Cell(this.cellsSize, x, y, index);
                this.cellsByIndex[index] = this.cells[x][y];
                index++;
            }
        }
    }

}
