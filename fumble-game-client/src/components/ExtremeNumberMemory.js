import React, {useState, useEffect} from 'react'
import NumberTile from "./NumberTile"

function NumberMemory() {
const [randomNums, setRandomNums] = useState([])
const [counter, setCounter] = useState(0)
const [score, setScore] = useState("")
const [disable, setDisable] = useState(false)
const [correct, setCorrect] = useState(true)
const [input, setInput] = useState("")
const [insult, setInsult] = useState([])

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
      setRandomNums([...randomNums, randomNumber])
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
  return <NumberTile key={tile} tileNumber={tile} randomNums={randomNums}/>
})

  return (
    <div style={{height: "500px"}}>
      <h3>YOU DO NOT BELONG HERE! 💀</h3>
      <h3>{correct ? levelTitle : `WRONG! YOUR SCORE IS ${score}. ${insult} TRY AGAIN!`}</h3>
      <button disabled={disable} onClick={handleStart}>Start!</button>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)}></input>
        <input disabled={!disable} type="submit"></input>
      </form>
      <div className="extreme-tile-container">
       {tileGrid} 
      </div>
  
    </div>
  )
}

export default NumberMemory