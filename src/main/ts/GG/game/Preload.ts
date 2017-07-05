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

            'cellPurple': 'img/grid-game/cells/cellPurple.png',
            'cellRed': 'img/grid-game/cells/cellRed.png',
            'cellYellow': 'img/grid-game/cells/cellYellow.png',
            'cellBlue': 'img/grid-game/cells/cellBlue.png',
            'cellLightBlue': 'img/grid-game/cells/cellLightBlue.png',
            'cellWhite': 'img/grid-game/cells/cellWhite.png',

            'cellAmazon': 'img/grid-game/smallCharacters/amazon.png',
            'cellChild': 'img/grid-game/smallCharacters/child.png',
            'cellGirl': 'img/grid-game/smallCharacters/girl.png',
            'cellIndian': 'img/grid-game/smallCharacters/indian.png',
            'cellKnight': 'img/grid-game/smallCharacters/knight.png',
            'cellMage': 'img/grid-game/smallCharacters/mage.png',
            'cellToad': 'img/grid-game/smallCharacters/toad.png'
        };

        for (let k in images) game.load.image(k, game.app.urlPrefix + images[k])
    }

}

