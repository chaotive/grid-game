window.start = function() {
    System.import('GG').then( function(imports) {
        window.app = new imports.App("dev");
    });
};
