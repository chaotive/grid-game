describe 'Cell', ->

  it 'builds on size 0', ->
    cell = new GG.map.Cell(0, 2, 5, 0)
    expect(cell.grid.x).to.equal 2
    expect(cell.grid.y).to.equal 5
    expect(cell.position.size).to.equal 0
    expect(cell.position.x).to.equal 0
    expect(cell.position.y).to.equal 0
    expect(cell.index).to.equal 0

  it 'builds on size different than 0', ->
    cell = new GG.map.Cell(3, 1, 3, 1)
    expect(cell.grid.x).to.equal 1
    expect(cell.grid.y).to.equal 3
    expect(cell.position.size).to.equal 3
    expect(cell.position.x).to.equal 3
    expect(cell.position.y).to.equal 9
    expect(cell.index).to.equal 1

  it 'builds on bigger size', ->
    cell = new GG.map.Cell(8, 155, 228, 2)
    expect(cell.grid.x).to.equal 155
    expect(cell.grid.y).to.equal 228
    expect(cell.position.size).to.equal 8
    expect(cell.position.x).to.equal 1240
    expect(cell.position.y).to.equal 1824
    expect(cell.index).to.equal 2