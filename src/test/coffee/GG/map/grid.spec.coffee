describe 'Grid', ->

  it 'builds with correct number of cells', ->
    grid = new GG.map.Grid(2,3,4)
    expect(grid.cells.length).to.equal 3
    expect(grid.cells[0].length).to.equal 4
    expect(grid.cellsByIndex.length).to.equal 12

  it 'correlates cells with indexes', ->
    grid = new GG.map.Grid(2,3,4)
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