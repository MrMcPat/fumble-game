import React from 'react'

function HighScoreCard({player}) {

  return (
    <div style={{width: "400px"}} className="player-score-card">
        <h3>{player.name}</h3>
        <p>{player.game_mode.game_mode}</p>
        <p>High Score: {player.high_score}</p>
        <p>{player.game_result}</p>
        <p>{player.date}</p>
        <p>{player.time}</p>
    </div>
  )
}

export default HighScoreCard