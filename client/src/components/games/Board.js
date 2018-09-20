import React from 'react'
import './Board.css'



const renderCel = (makeMove, rowIndex, cellIndex, color, player, hasTurn,) => {
  

  if (color !== null)
  {
  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}>
      {color.value}
      </button>
  ) 
} 
  return (
  <button
  className="board-tile"
  disabled={hasTurn}
  onClick={() => makeMove(rowIndex, cellIndex)}
  key={`${rowIndex}-${cellIndex}`}
>{color}</button>
  )
}

export default ({board, player, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((color, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, color, player, false))}
  </div>
)
