import React, {useState, useEffect} from 'react'
import FourByFourTile from "./FourByFourTile"

function FourByFourSequence() {
  const [randomTile, setRandomTile] = useState()
  const [randomSequence, setRandomSequence] = useState([])
  const [clickedSequence, setClickedSequence] = useState([])
  const [quotes, setQuotes] = useState([])
  const [counter, setCounter] = useState(0)
  const [disable, setDisable] = useState(false)
  const [correct, setCorrect] = useState(true)
  const [toggle, setToggle] = useState(false)

  const tileCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const randomNumber = Math.floor(Math.random()*16)+1
  const levelTitle = counter === 0 ? "Ready to get fumbled up? 🤓" : `Level ${counter}`

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(resp => resp.json())
    .then(data => setQuotes(data[Math.floor(Math.random()*1642)].text))
  }, [])

  console.log(quotes)

  function handleRandomNumber() {
    if (randomSequence.slice(-1).join() == randomNumber) {
      if (randomNumber === 16) {
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
        document.body.style.background= "#FF1700"
        setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
        console.log("WRONG!")
      }
    }
  }

  const tileGrid = tileCount.map(tile => {
    return <FourByFourTile key={tile} tileNumber={tile} randomTile={randomTile} randomSequence={randomSequence} disable={disable} onClickedNumber={handleClickedNumber} onRandomNumber={handleRandomNumber} toggle={toggle}/>
  })

  return (
    <div style={{height: "500px"}}>
      <h3>{correct ? levelTitle : `Wrong! ${quotes} But try again, you can do it!`}</h3>
      <button disabled={disable} onClick={handleRandomNumber}>Start!</button>
      <button onClick={handleToggle}>Afraid to fumble?</button>
    <div className="fourxfour-tile-container">
      {tileGrid}
    </div>
    </div>
  )
}

export default FourByFourSequence