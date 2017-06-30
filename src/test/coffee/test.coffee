should = require('chai').should()

global.Phaser = require('phaser-mock')

require '/lib/main/chaotive.fw-0.5.0'
#require '../../../lib/main/chaotive.fw-0.5.0'

require './GG/map/grid.spec.coffee'
