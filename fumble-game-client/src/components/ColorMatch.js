import React, {useState, useEffect} from 'react'
import ColorMatchTile from "./ColorMatchTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function ColorMatch({audioBlip, audioIncorrect}) {
    const [randomColor, setRandomColor] = useState("")
    const [randomizedArray, setRandomizedArray] = useState([])
    const [correct, setCorrect] = useState(true)
    const [counter, setCounter] = useState(0)
    const [score, setScore] = useState(0)
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

    const array = []
    for (let i = 0; i < 36; i++) {
      array.push("#" + Math.floor(Math.random()*16777215).toString(16))
    }
 
    useEffect(() => {
        setRandomizedArray(array)
        setRandomColor(array[Math.floor(Math.random() * 36)])
    }, [])

    function handleClickedTile (tile) {
        if (randomColor === tile) {
            console.log("yay")
            setRandomizedArray(array)
            setRandomColor(array[Math.floor(Math.random() * 36)])
            setCorrect(true)
            setCounter(counter + 1)
            setScore(counter+1)
            new Audio(audioBlip).play()
        } else {
            console.log("nay")
            setRandomizedArray(array)
            setRandomColor(array[Math.floor(Math.random() * 36)])
            setCorrect(false)
            setCounter(0)
            document.body.style.background= "#FF1700"
            setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
            new Audio(audioIncorrect).play()
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
          high_score: score,
          date: (new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear(),
          time: new Date().getHours() + ":" + String(new Date().getMinutes()).padStart(2, '0'),
          game_mode_id: 7
        })
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
      handleClose()
    }
  }

    const tileGrid = randomizedArray.map((tile, index) => {
        return <ColorMatchTile key={index} tileColor={tile} index={index} onClickedTile={handleClickedTile}/>
    })

  return (
    <div className="fade-in">
        <h3>Color Match</h3>
        <h5>{correct ? `Level ${counter}` : `Latest streak: ${score}`}</h5>
        <button className="game-button" disabled={correct} style={{opacity: correct ? ".5" : "1"}} onClick={handleOpen}>Save Score</button>
        <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style} className="modal">
            <form onSubmit={handleSubmit}>
            <h2>Color Match</h2>
            <h3>Your score is: {score}</h3>
            <label>Enter your name:</label>
            <input className="game-input" value={player} onChange={e => setPlayer(e.target.value)}></input>
            <input className="game-button" type="submit"/>
            </form>
          </Box>
      </Modal>
    <div style={{background: randomColor}} className="color-match"></div>
     <div className="sixbysix-tile-container">
        {tileGrid}
     </div>
    </div>
  )
}

export default ColorMatch