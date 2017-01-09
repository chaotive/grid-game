import {Game} from "./Game";

export class App extends CHAOTIVE.FW.APP.App {
    game: Game;

    constructor(configType = "main") {
        super(configType, () => this.start());
        console.log("LeoApp started: " + configType);
    }

    start() {
        this.game = new Game(this);
    }
}