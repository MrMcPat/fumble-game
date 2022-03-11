import React, {useState, useEffect} from 'react'
import FiveByFiveTile from "./FiveByFiveTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function FiveByFiveSequence({audioFlash, audioIncorrect}) {
  const [randomTile, setRandomTile] = useState()
  const [randomSequence, setRandomSequence] = useState([])
  const [clickedSequence, setClickedSequence] = useState([])
  const [insult, setInsult] = useState([])
  const [counter, setCounter] = useState(0)
  const [score, setScore] = useState("")
  const [disable, setDisable] = useState(false)
  const [saveDisable, setSaveDisable] = useState(true)
  const [correct, setCorrect] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [open, setOpen] = useState(false)
  const [player, setPlayer] = useState("")

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const tileCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  const randomNumber = Math.floor(Math.random()*25)+1
  const levelTitle = counter === 0 ? "READY TO GET FUMBLED UP?! 😈" : `Level ${counter}`

  useEffect(() => {
    fetch("https://insult.mattbas.org/api/insult.json")
    .then(resp => resp.json())
    .then(data => setInsult(data.insult))
  }, [])

  function handleRandomNumber() {
    if (randomSequence.slice(-1).join() == randomNumber) {
      if (randomNumber === 25) {
        setRandomSequence([...randomSequence, randomNumber-1])
        setRandomTile(randomNumber-1)
      } else if (randomNumber === 1) {
        setRandomSequence([...randomSequence, randomNumber+1])
        setRandomTile(randomNumber+1)
      } else {
        setRandomSequence([...randomSequence, randomNumber-1])
        setRandomTile(randomNumber-1)
      }
    } else {
      setRandomSequence([...randomSequence, randomNumber])
      setRandomTile(randomNumber)
    }
    setClickedSequence([])
    setCounter(counter+1)
    setScore(counter)
    setDisable(true)
    setSaveDisable(true)
    setCorrect(true)
    new Audio(audioFlash).play()
  }

  function handleClickedNumber(clickedNum) {
    setClickedSequence([...clickedSequence, clickedNum])
  }

  function handleToggle() {
    setToggle(toggle => !toggle)
  }

  console.log(clickedSequence)
  console.log(randomSequence)  
  
  if (clickedSequence.length === randomSequence.length && clickedSequence.length !== 0) {
      handleRandomNumber()
    for(let i = 0; i < clickedSequence.length; i++) {
      if (clickedSequence[i] !== randomSequence[i]) {
        setRandomSequence([])
        setClickedSequence([])
        setCounter(0)
        setDisable(false)
        setSaveDisable(false)
        setCorrect(false)
        new Audio(audioIncorrect).play()
        document.body.style.background= "#FF1700"
        setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (player.length === 0) {
      alert("Please enter a name!")
    } else {
    fetch("http://localhost:9292/player_scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: player,
        high_score: score-1,
        date: (new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear(),
        time: new Date().getHours() + ":" + String(new Date().getMinutes()).padStart(2, '0'),
        game_mode_id: 3
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    handleClose()
  }
}

  const tileGrid = tileCount.map(tile => {
    return <FiveByFiveTile key={tile} tileNumber={tile} randomTile={randomTile} randomSequence={randomSequence} disable={disable} onClickedNumber={handleClickedNumber} onRandomNumber={handleRandomNumber} correct={correct} toggle={toggle}/>
  })

  return (
    <div style={{height: "500px"}} className="fade-in">
      <h3>{correct ? levelTitle : `WRONG! YOUR SCORE IS ${score-1}. ${insult}. TRY AGAIN!`}</h3>
      <button className="game-button" disabled={disable} style={{opacity: disable ? ".5" : "1"}} onClick={handleRandomNumber}>Start!</button>
      <button className="game-button" onClick={handleToggle}>Afraid to fumble?</button>
      <button className="game-button" disabled={saveDisable} style={{opacity: saveDisable ? ".5" : "1"}} onClick={handleOpen}>Save Score</button>
      <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style} className="modal">
          <form onSubmit={handleSubmit}>
          <h2>Sequence Memory (5x5)</h2>
            <h3>Your score is: {score === "" ? "" : score-1}</h3>
            <label>Enter your name:</label>
            <input className="game-input" value={player} onChange={e => setPlayer(e.target.value)}></input>
            <input className="game-button" type="submit"/>
            </form>
          </Box>
      </Modal>
    <div className="fivebyfive-tile-container">
      {tileGrid}
    </div>
    </div>
  )
}

export default FiveByFiveSequence