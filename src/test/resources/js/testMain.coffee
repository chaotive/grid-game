window.start = () ->
  window.GG =
    map: {}

  Promise.all([
    'GG/map/Grid'
    'GG/map/Cell'
  ].map( (url) ->
    System['import'](url)
  )).then (modules) ->
    window.GG["map"]["Grid"] = modules[0]["Grid"]
    window.GG["map"]["Cell"] = modules[1]["Cell"]

    runner = mocha.run()
