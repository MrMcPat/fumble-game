import React, {useState, useEffect} from 'react'
import EasyNumberTile from "./EasyNumberTile"

function EasyNumberMemory() {
const [randomNums, setRandomNums] = useState([])
const [counter, setCounter] = useState(0)
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
    if (input == randomNums.join("")) {
      setRandomNums([...randomNums, randomNumber])
      setCorrect(true)
      setCounter(counter+1)
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
    <div style={{height: "500px"}}>
      <h3>Memorize all the numbers that have flashed, darling~ 🥰</h3>
      <h3>{correct ? levelTitle : `WRONG! HERE, A LAME JOKE TO MAKE YOU FEEL BETTER: ${compliment}`}</h3>
      <button disabled={disable} onClick={handleStart}>Start!</button>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)}></input>
        <input disabled={!disable} type="submit"></input>
      </form>
      <div className="sevenbyseven-tile-container">
       {tileGrid} 
      </div>
  
    </div>
  )
}

export default EasyNumberMemory