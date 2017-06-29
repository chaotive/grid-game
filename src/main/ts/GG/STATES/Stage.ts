import {Grid} from "../map/Grid";

export class Stage extends Phaser.State {

    create() {
        let map = new Grid(2,3,3);
        console.log(map);
    }

}

