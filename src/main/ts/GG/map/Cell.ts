export class Cell {
    grid: {x: number, y: number};
    position: {size: number, x: number, y: number};
    index: number;

    constructor(size, gridX, gridY, index) {
        this.grid = {x: gridX, y: gridY};
        this.position = {size: size, x: gridX * size, y: gridY * size};
        this.index = index;
    }
}
