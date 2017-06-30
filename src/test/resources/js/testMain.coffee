window.start = () ->
  window.GG =
    map: {}
    GAME: {}

  Promise.all([
    'GG/map/Grid'
    'GG/map/Cell'
    'GG/GAME/Util'
  ].map( (url) ->
    System['import'](url)
  )).then (modules) ->
    window.GG["map"]["Grid"] = modules[0]["Grid"]
    window.GG["map"]["Cell"] = modules[1]["Cell"]
    window.GG["GAME"]["Util"] = modules[2]["Util"]

    runner = mocha.run()
