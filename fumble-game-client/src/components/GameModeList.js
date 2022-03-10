import React from 'react'
 
 
function GameModeList({game_mode, index, onSelect}) {
 
  function handleClick() {
    onSelect(index)
  }
 
  return (
    <div className="game-mode-card">
        <h3 onClick={handleClick}>{game_mode}  </h3>
    </div>
  )
}
 
export default GameModeList