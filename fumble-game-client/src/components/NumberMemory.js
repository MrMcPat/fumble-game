import React, {useState, useEffect} from 'react'
import NumberTile from "./NumberTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function NumberMemory({audioKey, audioBackspace, audioType, audioIncorrect, mute}) {
const [randomNums, setRandomNums] = useState([])
const [counter, setCounter] = useState(0)
const [score, setScore] = useState("")
const [disable, setDisable] = useState(false)
const [saveDisable, setSaveDisable] = useState(true)
const [correct, setCorrect] = useState(true)
const [input, setInput] = useState("")
const [lameJoke, setLameJoke] = useState([])
const [open, setOpen] = useState(false)
const [number, setNumber] = useState("")
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

const levelTitle = counter === 0 ? "Try to get the longest number." : `Level ${counter}`

let tileCount = []
for (let i = 1; i<101; i++) {
  tileCount.push(i)
}

const randomNumber = Math.floor(Math.random()*100)+1
console.log(randomNums.join(""))

useEffect(() => {
  fetch("https://icanhazdadjoke.com/slack")
  .then(resp => resp.json())
  .then(data => setLameJoke(data.attachments[0].text))
}, [])

  function handleStart() {
    setRandomNums([...randomNums, randomNumber])
    setDisable(true)
    setSaveDisable(true)
    setCounter(counter+1)
    setScore(counter)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!mute) {
      new Audio(audioType).play()
    }
    if (input === randomNums.join("")) {
      if (randomNums.slice(-1).join() == randomNumber) {
        if (randomNumber === 100) {
          setRandomNums([...randomNums, randomNumber-1])
        } else if (randomNumber === 1) {
          setRandomNums([...randomNums, randomNumber+1])
        } else {
          setRandomNums([...randomNums, randomNumber-1])
        }
      } else {
        setRandomNums([...randomNums, randomNumber])
      }
      setCorrect(true)
      setCounter(counter+1)
      setScore(counter)
      setNumber(input)
    } else {
      setRandomNums([])
      setDisable(false)
      setSaveDisable(false)
      setCorrect(false)
      setCounter(0)
      document.body.style.background= "#FF1700"
      setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
      if (!mute) {
        new Audio(audioIncorrect).play()
      }
    }
    setInput("")
  }

  function handleSubmitScore(e) {
    e.preventDefault()
    if (player.length === 0) {
      alert("Please enter a name!")
    } else {
    fetch("https://fumble-game-server.herokuapp.com/player_scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: player,
        high_score: score,
        game_result: number,
        date: (new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear(),
        time: new Date().getHours() + ":" + new Date().getMinutes(),
        game_mode_id: 140
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    handleClose()
  }
}

function handleKeyDown(e) {
  if (e.key === "Backspace") {
    if (!mute) {
      new Audio(audioBackspace).play()
    }
  } else {
    if (!mute) {
      new Audio(audioKey).play()
    }
  }
}

const tileGrid = tileCount.map(tile => {
  return <NumberTile key={tile} tileNumber={tile} randomNums={randomNums}/>
})

  return (
    <div style={{height: "500px"}} className="fade-in">
      <h3>MEMORIZE ALL THE NUMBERS THAT HAVE FLASHED 🤡</h3>
      <h3>{correct ? levelTitle : `WRONG! HERE'S YOUR SCORE ${score}. A LAME JOKE TO MAKE YOU FEEL BETTER: ${lameJoke}`}</h3>
      <button className="game-button" disabled={disable} style={{opacity: disable ? ".5" : "1"}} onClick={handleStart}>Start!</button>
      <button className="game-button" disabled={saveDisable} style={{opacity: saveDisable ? ".5" : "1"}} onClick={handleOpen}>Save Score</button>
      <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style} className="modal">
            <form onSubmit={handleSubmitScore}>
            <h2>Number Memory</h2>
            <h3>Your score is: {score}</h3>
            <label>Enter your name:</label>
            <input className="game-input" value={player} onChange={e => setPlayer(e.target.value)}></input>
            <input className="game-button" type="submit"/>
            </form>
          </Box>
      </Modal>
      <form onSubmit={handleSubmit}>
        <input className="game-input" autoComplete="off" label="Enter your number..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}></input>
        <input style={{display: "none"}}disabled={!disable} type="submit"></input>
      </form>
      <div className="massive-tile-container">
       {tileGrid} 
      </div>
  
    </div>
  )
}

export default NumberMemory