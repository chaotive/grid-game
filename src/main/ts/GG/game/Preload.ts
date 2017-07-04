/**
 * Created by leo on 05-01-2017.
 */

export class Preload {

    static images(game) {
        let images = {
            'chaotive': 'img/chaotive.png',
            'bg1': 'img/bg/bg_1.jpg',
            'bg2': 'img/bg/bg_2.jpg',
            'startbutton': 'img/ui/button_start_1.png',
            'spr1': 'img/sprites/spr_1.png',

            'cellPurple': 'img/grid-game/cellPurple.png',
            'cellRed': 'img/grid-game/cellRed.png',
            'cellYellow': 'img/grid-game/cellYellow.png',
            'cellBlue': 'img/grid-game/cellBlue.png',
            'cellLightBlue': 'img/grid-game/cellLightBlue.png',
            'cellWhite': 'img/grid-game/cellWhite.png'
        };

        for (let k in images) game.load.image(k, game.app.urlPrefix + images[k])
    }

}

