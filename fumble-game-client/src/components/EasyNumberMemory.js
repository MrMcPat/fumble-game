import React, {useState, useEffect} from 'react'
import EasyNumberTile from "./EasyNumberTile"
import TextField from '@mui/material/TextField';

function EasyNumberMemory() {
const [randomNums, setRandomNums] = useState([])
const [counter, setCounter] = useState(0)
const [score, setScore] = useState("")
const [disable, setDisable] = useState(false)
const [correct, setCorrect] = useState(true)
const [input, setInput] = useState("")
const [compliment, setCompliment] = useState([])

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
      <button disabled={disable} onClick={handleStart}>Start!</button>
      <form onSubmit={handleSubmit}>
        <TextField autoComplete="off" label="Enter your number..." variant="standard" value={input} onChange={e => setInput(e.target.value)}></TextField>
        <input style={{display: "none"}}disabled={!disable} type="submit"></input>
      </form>
      <div className="sevenbyseven-tile-container">
       {tileGrid} 
      </div>
  
    </div>
  )
}

export default EasyNumberMemory