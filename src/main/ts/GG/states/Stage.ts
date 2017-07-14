import {Grid} from "../map/Grid";
import {Size} from "../utils/Size";
import {Preload} from "../game/Preload";
import {CellSprite} from "../sprites/CellSprite";
import {Utils} from "../utils/Utils";
import Sprite = Phaser.Sprite;

export class Stage extends Phaser.State {
    cells: CellSprite[];
    grid: Grid;
    colors: string[];

    player: CellSprite;
    button: Sprite;

    private currentColumn: number;

    preload() {
        Preload.images(this.game);
    }

    create() {
        let width = 640;
        let height = 360;
        let factor = 0.826;
        let columns = Utils.getRandomInt(2, 32);//2; //16; //Utils.getRandomInt(2, 320)
        let rows = parseInt(columns * factor); //8; //Utils.getRandomInt(2, 180)

        this.grid = new Grid(new Size(width, height), columns, rows, true);
        this.colors = ['Amazon', 'Child', 'Girl', 'Indian', 'Knight', 'Mage', 'Toad'];
        this.currentColumn = 0;

        this.cells = [];
        for(let i = 0; i < this.grid.cellsByIndex.length; i++) {
            let colorIndex = Utils.getRandomInt(0, this.colors.length - 1);
            let cell = new CellSprite(this.game, this.grid.cellsByIndex[i], 'cell' + this.colors[colorIndex]);
            this.cells.push(cell);
            this.add.existing(cell);
        }

        this.player = new CellSprite(this.game, this.grid.cells[0][0], 'spr1');
        this.add.existing(this.player);

        this.button = this.game.add.sprite(230, 90, 'startbutton');
        this.button.inputEnabled = true;
        this.button.events.onInputDown.add(this.action_playerMove,this);
    }

    action_playerMove() {
        let x = Utils.getRandomInt(0, this.grid.columns - 1);
        let y = Utils.getRandomInt(0, this.grid.rows - 1);
        this.player.move(this.grid.cells[x][y]);
    }

    update() {
        if(this.currentColumn == this.grid.columns) this.currentColumn = 0;

        let columnCells = this.cells.filter(c =>
            c.cell.grid.x == this.currentColumn
        );

        columnCells.map(c => this.cellUpdate(c));

        this.currentColumn++;
    }

    cellUpdate(cellSprite) {
        //this.tintSprite(cellSprite);
        //this.toggleSprite(cellSprite);
    }

    tintSprite(sprite) {
        sprite.tint = Math.random() * 0xffffff
    }

    toggleSprite(sprite) {
        sprite.visible = Utils.getRandomInt(0, 1);
    }
}

