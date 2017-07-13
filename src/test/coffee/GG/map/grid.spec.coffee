describe 'Grid', ->

  it 'builds with correct number of cells', ->
    grid = new GG.map.Grid({width: 2, height: 2}, 3, 4)
    expect(grid.cells.length).to.equal 3
    expect(grid.cells[0].length).to.equal 4
    expect(grid.cellsByIndex.length).to.equal 12

  it 'correlates cells with indexes', ->
    grid = new GG.map.Grid({width: 2, height: 2}, 3, 4)
    expect(grid.cellsByIndex[0]).to.equal grid.cells[0][0]
    expect(grid.cellsByIndex[1]).to.equal grid.cells[0][1]
    expect(grid.cellsByIndex[2]).to.equal grid.cells[0][2]
    expect(grid.cellsByIndex[3]).to.equal grid.cells[0][3]
    expect(grid.cellsByIndex[4]).to.equal grid.cells[1][0]
    expect(grid.cellsByIndex[5]).to.equal grid.cells[1][1]
    expect(grid.cellsByIndex[6]).to.equal grid.cells[1][2]
    expect(grid.cellsByIndex[7]).to.equal grid.cells[1][3]
    expect(grid.cellsByIndex[8]).to.equal grid.cells[2][0]
    expect(grid.cellsByIndex[9]).to.equal grid.cells[2][1]
    expect(grid.cellsByIndex[10]).to.equal grid.cells[2][2]
    expect(grid.cellsByIndex[11]).to.equal grid.cells[2][3]

  it 'generates correct cell size', ->
    grid = new GG.map.Grid({width: 2, height: 2}, 3, 4)
    expect(grid.cellsSize.width).to.be.closeTo 0.67, 0.01
    expect(grid.cellsSize.height).to.equal 0.5

  it 'generates cells of correct size and in correct position', ->
    grid = new GG.map.Grid({width: 7, height: 4}, 2, 3)
    expect(grid.cellsByIndex[0].size.width).to.equal 3.5
    expect(grid.cellsByIndex[0].size.height).to.be.closeTo 1.33, 0.01

    expect(grid.cellsByIndex[0].position.x).to.equal 0
    expect(grid.cellsByIndex[0].position.y).to.equal 0
    expect(grid.cellsByIndex[1].position.x).to.equal 0
    expect(grid.cellsByIndex[1].position.y).to.be.closeTo 1.33, 0.01
    expect(grid.cellsByIndex[2].position.x).to.equal 0
    expect(grid.cellsByIndex[2].position.y).to.be.closeTo 2.66, 0.01

    expect(grid.cellsByIndex[3].position.x).to.equal 3.5
    expect(grid.cellsByIndex[3].position.y).to.equal 0
    expect(grid.cellsByIndex[4].position.x).to.equal 3.5
    expect(grid.cellsByIndex[4].position.y).to.be.closeTo 1.33, 0.01
    expect(grid.cellsByIndex[5].position.x).to.equal 3.5
    expect(grid.cellsByIndex[5].position.y).to.be.closeTo 2.66, 0.01

  it 'generates cells of correct size and in correct position, with inverted Y axis', ->
    grid = new GG.map.Grid({width: 7, height: 4}, 2, 3, true)
    console.log "grid", grid
    expect(grid.cells[0][0].size.width).to.equal 3.5
    expect(grid.cells[0][0].size.height).to.be.closeTo 1.33, 0.01

    expect(grid.cells[1][2].position.x).to.equal 0
    expect(grid.cells[1][2].position.y).to.equal 0
    expect(grid.cells[1][1].position.x).to.equal 0
    expect(grid.cells[1][1].position.y).to.be.closeTo 1.33, 0.01
    expect(grid.cells[1][0].position.x).to.equal 0
    expect(grid.cells[1][0].position.y).to.be.closeTo 2.66, 0.01

    expect(grid.cells[0][2].position.x).to.equal 3.5
    expect(grid.cells[0][2].position.y).to.equal 0
    expect(grid.cells[0][1].position.x).to.equal 3.5
    expect(grid.cells[0][1].position.y).to.be.closeTo 1.33, 0.01
    expect(grid.cells[0][0].position.x).to.equal 3.5
    expect(grid.cells[0][0].position.y).to.be.closeTo 2.66, 0.01
