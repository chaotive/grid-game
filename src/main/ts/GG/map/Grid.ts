import {Cell} from "./Cell";
import {Size} from "../utils/Size";

export class Grid {
    size: Size;
    columns: number;
    rows: number;

    cellsSize: Size;
    cells: Cell[][];
    cellsByIndex: Cell[];

    invertY: boolean;

    constructor(size, columns, rows, invertY = false) {
        this.size = size;
        this.columns = columns;
        this.rows = rows;
        this.invertY = invertY;

        this.cellsSize = new Size(size.width / columns, size.height / rows);
        this.cells = [];
        let index = 0;
        this.cellsByIndex = [];
        for (let x = 0; x < columns; x++) {
            this.cells[x] = [];
            for (let y = 0; y < rows; y++) {
                this.cells[x][y] = new Cell(this.cellsSize, x, this.getYPosition(y), index, y);
                this.cellsByIndex[index] = this.cells[x][y];
                index++;
            }
        }
    }

    private getYPosition(i) : number {
        if(this.invertY == true) return this.rows - i - 1;
        else return i;
    }
}
