import {Size} from "../utils/Size";
import {Position2d} from "../utils/Position2d";

export class Cell {
    grid: Position2d;
    size: Size;
    position: Position2d;
    index: number;

    constructor(size, gridX, gridY, index) {
        this.grid = new Position2d(gridX, gridY);
        this.size = size;
        this.position = new Position2d(gridX * size.width, gridY * size.height);
        this.index = index;
    }
}
