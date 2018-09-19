import React from 'react'
import './Board.css'

const renderCel = (makeMove, rowIndex, cellIndex, color, hasTurn) => {

  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    >{color || null }</button>
  )
}

// Hoe krijgen we het board hier?
export default ({board, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((color, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, color, false))}
  </div>
)
