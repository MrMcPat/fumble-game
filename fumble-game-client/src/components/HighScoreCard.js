import React from 'react'

function HighScoreCard({player}) {

  return (
    <div className="player-score-card">
        <p>Name: {player.name}</p>
        <p>{player.game_mode.game_mode}</p>
        <p>High Score: {player.high_score}</p>
        <p>{player.game_result}</p>
        <p>{player.date}</p>
        <p>{player.time}</p>
    </div>
  )
}

export default HighScoreCard