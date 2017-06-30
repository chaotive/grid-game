window.start = () ->
  window.GG =
    map: {}
    GAME: {}

  Promise.all(['grid-game/map/Grid', 'grid-game/GAME/Util'].map( (url) ->
    System['import'](url)
  )).then (modules) ->
    window.GG["map"]["Grid"] = modules[0]["Grid"]
    window.GG["GAME"]["Util"] = modules[1]["Util"]

    runner = mocha.run()
