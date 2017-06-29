System.config({
    packages: {
        "ts": {
            "main": "plugin-typescript-5.3.3.js"
        },
        "typescript": {
            "main": "typescript-2.1.4.js",
            "meta": {
                "typescript-2.1.4.js": {
                    "exports": "ts"
                }
            }
        },
        "some-game": {
            "defaultExtension": "ts",
            "main": "App.ts",
            "meta": {
                "*.ts": {
                    "loader": "ts"
                }
            }
        },
        "grid-game": {
            "defaultExtension": "ts",
            "main": "App.ts",
            "meta": {
                "*.ts": {
                    "loader": "ts"
                }
            }
        }
    },
    map: {
        "ts": "../../../lib/dev/ts",
        "typescript": "../../../lib/dev/ts",
        "some-game": '../../main/ts/SOME-GAME',
        "grid-game": '../../main/ts/GG'
    },
    transpiler: "ts"
});

window.start = function() {
    System.import('grid-game').then( function(sg) {
        window.app = new sg.App("dev");
    });
};
