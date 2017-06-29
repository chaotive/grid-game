window.start = function() {
    System.import('grid-game').then( function(sg) {
        window.app = new sg.App("dev");
    });
};
