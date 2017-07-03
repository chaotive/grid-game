describe 'Cell', ->

  it 'builds on size 0', ->
    cell = new GG.map.Cell({width: 0, height: 0}, 2, 5, 0)
    expect(cell.grid.x).to.equal 2
    expect(cell.grid.y).to.equal 5
    expect(cell.size).to.eql {width: 0, height: 0}
    expect(cell.position.x).to.equal 0
    expect(cell.position.y).to.equal 0
    expect(cell.index).to.equal 0

  it 'builds on size different than 0', ->
    cell = new GG.map.Cell({width:3, height:3}, 1, 3, 1)
    expect(cell.grid.x).to.equal 1
    expect(cell.grid.y).to.equal 3
    expect(cell.size).to.eql {width:3, height:3}
    expect(cell.position.x).to.equal 3
    expect(cell.position.y).to.equal 9
    expect(cell.index).to.equal 1

  it 'builds on bigger size', ->
    cell = new GG.map.Cell({width:8, height:8}, 155, 228, 2)
    expect(cell.grid.x).to.equal 155
    expect(cell.grid.y).to.equal 228
    expect(cell.size).to.eql {width:8, height:8}
    expect(cell.position.x).to.equal 1240
    expect(cell.position.y).to.equal 1824
    expect(cell.index).to.equal 2

  it 'builds on non square cell', ->
    cell = new GG.map.Cell({width:5/3, height:13/3}, 155, 228, 3)
    expect(cell.grid.x).to.equal 155
    expect(cell.grid.y).to.equal 228
    expect(cell.size).to.eql {width:5/3, height:13/3}
    expect(cell.position.x).to.be.closeTo 258.33, 0.01
    expect(cell.position.y).to.be.closeTo 987.99, 0.01
    expect(cell.index).to.equal 3