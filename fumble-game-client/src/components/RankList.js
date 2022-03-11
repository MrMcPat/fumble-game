import React from 'react'
 
function RankList({playerRankings, selectedRanking}) {

    const rankDataList = playerRankings.map((player, index) => {
        return <div key={index}>
        <h5>{index+1}. {player.name}'s score: {player.high_score} at {player.time} on {player.date}.</h5>
        </div>
    })
 
    return(
        <div className="rank-list-card"> 
        <h3>{selectedRanking}</h3>
             {rankDataList}
        </div>
    )
}
 
export default RankList