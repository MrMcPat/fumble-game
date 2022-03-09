import React, {useState, useEffect} from 'react'
import ExtremeNumberTile from "./ExtremeNumberTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function NumberMemory() {
const [randomNums, setRandomNums] = useState([])
const [counter, setCounter] = useState(0)
const [score, setScore] = useState("")
const [disable, setDisable] = useState(false)
const [correct, setCorrect] = useState(true)
const [input, setInput] = useState("")
const [insult, setInsult] = useState([])
const [open, setOpen] = useState(false);

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
for (let i = 1; i<226; i++) {
  tileCount.push(i)
}

const randomNumber = Math.floor(Math.random()*225)+1
console.log(randomNums.join(""))

useEffect(() => {
  fetch("https://insult.mattbas.org/api/insult.json")
  .then(resp => resp.json())
  .then(data => setInsult(data.insult))
}, [])

  function handleStart() {
    setRandomNums([...randomNums, randomNumber])
    setDisable(true)
    setCounter(counter+1)
    setScore(counter)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (input === randomNums.join("")) {
      if (randomNums.slice(-1).join() == randomNumber) {
        if (randomNumber === 225) {
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
    } else {
      setRandomNums([])
      setDisable(false)
      setCorrect(false)
      setCounter(0)
      document.body.style.background= "#FF1700"
      setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
    }
    setInput("")
  }

const tileGrid = tileCount.map(tile => {
  return <ExtremeNumberTile key={tile} tileNumber={tile} randomNums={randomNums}/>
})

  return (
    <div style={{height: "500px"}} className="fade-in">
      <h3>YOU DO NOT BELONG HERE! 💀</h3>
      <h3>{correct ? levelTitle : `WRONG! YOUR SCORE IS ${score}. ${insult} TRY AGAIN!`}</h3>
      <button className="game-button" disabled={disable} onClick={handleStart}>Start!</button>
      <button className="game-button" disabled={disable} onClick={handleOpen}>Save Score</button>
      <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style} className="modal">
            <h3>Your score is: {score}</h3>
            <label>Enter your name:</label>
            <input></input>
          </Box>
      </Modal>
      <form onSubmit={handleSubmit}>
        <input autoComplete="off" variant="standard" value={input} onChange={e => setInput(e.target.value)}></input>
        <input style={{display: "none"}}disabled={!disable} type="submit"></input>
      </form>
      <div className="extreme-tile-container">
       {tileGrid} 
      </div>
  
    </div>
  )
}

export default NumberMemory