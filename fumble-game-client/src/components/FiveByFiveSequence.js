import React, {useState} from 'react'
import FiveByFiveTile from "./FiveByFiveTile"

function FiveByFiveSequence() {
  const [randomTile, setRandomTile] = useState()
  const [randomSequence, setRandomSequence] = useState([])
  const [clickedSequence, setClickedSequence] = useState([])
  const [counter, setCounter] = useState(0)
  const [disable, setDisable] = useState(false)
  const [correct, setCorrect] = useState(true)

  const tileCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  const randomNumber = Math.floor(Math.random()*25)+1
  const levelTitle = counter === 0 ? "Ready to get fumbled up?" : `Level ${counter}`

  function handleRandomNumber() {
    setRandomTile(randomNumber)
    setRandomSequence([...randomSequence, randomNumber])
    setClickedSequence([])
    setCounter(counter+1)
    setDisable(true)
    setCorrect(true)
  }

  function handleClickedNumber(clickedNum) {
    setClickedSequence([...clickedSequence, clickedNum])
  }

  console.log(clickedSequence)
  console.log(randomSequence)  
  
  if (clickedSequence.length == randomSequence.length && clickedSequence.length != 0) {
      handleRandomNumber()
    for(let i = 0; i < clickedSequence.length; i++) {
      if (clickedSequence[i] !== randomSequence[i]) {
        setRandomSequence([])
        setClickedSequence([])
        setCounter(0)
        setDisable(false)
        setCorrect(false)
        console.log("WRONG!")
      }
    }
  }

  const tileGrid = tileCount.map(tile => {
    return <FiveByFiveTile key={tile} tileNumber={tile} randomTile={randomTile} randomSequence={randomSequence} disable={disable} onClickedNumber={handleClickedNumber} onRandomNumber={handleRandomNumber}/>
  })

  return (
    <div style={{height: "500px"}}>
      <h3>{correct ? levelTitle : "WRONG! TRY AGAIN"}</h3>
      <button disabled={disable} onClick={handleRandomNumber}>Start!</button>
    <div className="fivebyfive-tile-container">
      {tileGrid}
    </div>
    </div>
  )
}

export default FiveByFiveSequence