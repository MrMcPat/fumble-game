import React from 'react'

function HighScoreCard({player}) {

    const playerScoreList = player.scores.map((scores, index) => {
        return <h4 key={index}>{scores.high_score}</h4>
    })

  return (
    <div>
        <h3>{player.name}</h3>
        High Score: {playerScoreList}
    </div>
  )
}

export default HighScoreCard