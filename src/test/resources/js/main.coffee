window.start = () ->

#  window.define = System.amdDefine;
#  window.require = window.requirejs = System.amdRequire;

  window.expect = chai.expect
  window.should = chai.should()
  runner = mocha.run()

  System.import('grid-game/map/Grid').then( (imports) ->
      console.log("Started!");
      console.log(imports);
      #grid = new imports.Grid(2,3,3);
  )
