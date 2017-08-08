import {Size} from "../utils/Size";
import {Position2d} from "../utils/Position2d";

export class Cell {
    grid: Position2d;
    size: Size;
    position: Position2d;
    index: number;
    center: Position2d;

    constructor(size, gridX, gridY, index, correctedGridY = gridY) {
        this.grid = new Position2d(gridX, correctedGridY);
        this.size = size;
        this.position = new Position2d(gridX * size.width, gridY * size.height);
        this.index = index;
        this.center = new Position2d(this.position.x + size.width/2, this.position.y + size.height/2);
    }
}
