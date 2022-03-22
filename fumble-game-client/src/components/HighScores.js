import React, {useState, useEffect} from 'react'
import GameModeList from './GameModeList'
import HighScoreCard from './HighScoreCard'
import RankList from './RankList'
import PopularGameMode from './PopularGameMode'
 
function HighScores() {
  const [playerData, setPlayerData] = useState([])
  const [rankData, setRankData] = useState([])
  const [popGameData, setPopGameData] = useState([])
  const [playerRankings, setPlayerRankings] = useState([])
  const [selectedRanking, setSelectedRanking] = useState([])
 
  const gameMode = ["Sequence Memory 3x3",
  "Sequence Memory 4x4",
  "Sequence Memory 5x5",
  "Easy Number Memory",
  "Number Memory",
  "Extreme Number Memory",
  "Color Match",
  "Crazy Color Match",
  "Death Color Match",
  ]
 
  useEffect(() => {
    fetch("https://fumble-game-server.herokuapp.com/player_scores")
    .then(resp => resp.json())
    .then(data => setPlayerData(data))
  }, [])
 
  useEffect(() => {
    fetch("https://fumble-game-server.herokuapp.com/game_modes/ranking")
    .then(resp => resp.json())
    .then(data => {setRankData(data)
    setPlayerRankings(data[0])
    setSelectedRanking(gameMode[0])
    })
  }, [])
 
  useEffect(() => {
    fetch("https://fumble-game-server.herokuapp.com/game_modes/game_mode_popularity")
    .then(resp => resp.json())
    .then(data => setPopGameData(data))
  }, [])
 
  function handleSelect (id) {
    const playerRank = rankData.filter((rank, index) => {
      return index === id
    })
    setPlayerRankings(playerRank[0])
    setSelectedRanking(gameMode[id])
    console.log(selectedRanking)
  }
 
  const playerDataList = playerData.map(player => {
    return <HighScoreCard key={player.id} player={player}/>
  })
 
  const gameModeList = gameMode.map((game_mode, index) => {
    return <GameModeList key={index} game_mode={game_mode} index={index} selectedRanking={selectedRanking} onSelect={handleSelect}/>
  })
 
  const popGameDataList = popGameData.map(game_mode => {
    return <PopularGameMode key={game_mode.id} game_mode={game_mode}/>
  }) 
 
  return (
    <div className="background fade-in">
        <h1>Leaderboards</h1>    
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
 
         <div className="game-mode-container">
          <h1>Game Modes</h1>
          {gameModeList}
        </div>
        <div className="ticker-wrap">
         <div className="ticker">
          <ol>
          {popGameDataList}
          </ol>
          </div>
          </div>
          <div className="top-ranked-players">
            <h1>Top Ten Players</h1>
          <RankList playerRankings={playerRankings} selectedRanking={selectedRanking}/>
          </div>
          <h1 className="player-score-title">Latest Scores</h1>
        <div className="player-score-container">
        {playerDataList}
        </div>
      </div>
 
  )
}
 
export default HighScores