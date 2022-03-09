import React, {useState, useEffect} from 'react'
import EasyNumberTile from "./EasyNumberTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function EasyNumberMemory() {
const [randomNums, setRandomNums] = useState([])
const [counter, setCounter] = useState(0)
const [score, setScore] = useState("")
const [disable, setDisable] = useState(false)
const [correct, setCorrect] = useState(true)
const [input, setInput] = useState("")
const [compliment, setCompliment] = useState([])
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

const levelTitle = counter === 0 ? "PSSSSST! Try to get the longest number." : `Level ${counter}`

let tileCount = []
for (let i = 1; i<50; i++) {
  tileCount.push(i)
}

const randomNumber = Math.floor(Math.random()*49)+1
console.log(randomNums.join(""))

useEffect(() => {
  fetch("https://complimentr.com/api")
  .then(resp => resp.json())
  .then(data => setCompliment(data.compliment))
}, [])

  function handleStart() {
    setRandomNums([...randomNums, randomNumber])
    setDisable(true)
    setCounter(counter+1)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (input === randomNums.join("")) {
      if (randomNums.slice(-1).join() === randomNumber) {
        if (randomNumber === 49) {
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
  return <EasyNumberTile key={tile} tileNumber={tile} randomNums={randomNums}/>
})

  return (
    <div style={{height: "500px"}} className="fade-in">
      <h3>Memorize all the numbers that have flashed, darling~ 🥰</h3>
      <h3>{correct ? levelTitle : `Oh no...Your score is ${score}. ${compliment}`}</h3>
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
      <div className="sevenbyseven-tile-container">
       {tileGrid} 
      </div>
  
    </div>
  )
}

export default EasyNumberMemory