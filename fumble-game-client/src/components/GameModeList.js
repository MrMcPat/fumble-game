import React from 'react'
 
 
function GameModeList({game_mode, index, selectedRanking, onSelect}) {
 
  function handleClick() {
    onSelect(index)
  }
 
  return (
    <div className={`game-mode-card ${game_mode === selectedRanking ? "selected-game-mode-card" : ""}`}>
        <h3 onClick={handleClick}>{game_mode}</h3>
    </div>
  )
}
 
export default GameModeList