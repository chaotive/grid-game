export class Grid {
    cellSize: number;
    rows: number;
    columns: number;

    constructor(size, rows, columns) {
        this.cellSize = size;
        this.rows = rows;
        this.columns = columns;

        console.log("Built a grid!");
    }

}
