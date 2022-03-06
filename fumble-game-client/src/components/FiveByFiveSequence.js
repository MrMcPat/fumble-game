import React, {useState, useEffect} from 'react'
import FiveByFiveTile from "./FiveByFiveTile"

function FiveByFiveSequence() {
  const [randomTile, setRandomTile] = useState()
  const [randomSequence, setRandomSequence] = useState([])
  const [clickedSequence, setClickedSequence] = useState([])
  const [insults, setInsults] = useState([])
  const [counter, setCounter] = useState(0)
  const [disable, setDisable] = useState(false)
  const [correct, setCorrect] = useState(true)
  const [toggle, setToggle] = useState(false)

  const tileCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  const randomNumber = Math.floor(Math.random()*25)+1
  const levelTitle = counter === 0 ? "READY TO GET FUMBLED UP?! 😈" : `Level ${counter}`

  useEffect(() => {
    fetch("https://insult.mattbas.org/api/insult.json")
    .then(resp => resp.json())
    .then(data => setInsults(data.insult))
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
    setDisable(true)
    setCorrect(true)
  }

  function handleClickedNumber(clickedNum) {
    setClickedSequence([...clickedSequence, clickedNum])
  }

  function handleToggle() {
    setToggle(toggle => !toggle)
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
    return <FiveByFiveTile key={tile} tileNumber={tile} randomTile={randomTile} randomSequence={randomSequence} disable={disable} onClickedNumber={handleClickedNumber} onRandomNumber={handleRandomNumber} toggle={toggle}/>
  })

  return (
    <div style={{height: "500px"}}>
      <h3>{correct ? levelTitle : `WRONG! ${insults}. TRY AGAIN!`}</h3>
      <button disabled={disable} onClick={handleRandomNumber}>Start!</button>
      <button onClick={handleToggle}>Afraid to fumble?</button>
    <div className="fivebyfive-tile-container">
      {tileGrid}
    </div>
    </div>
  )
}

export default FiveByFiveSequence