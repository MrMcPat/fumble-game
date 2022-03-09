import React, {useState, useEffect} from 'react'
import ColorMatchTile from "./ColorMatchTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function DeathColorMatch() {
    const [randomColor, setRandomColor] = useState("")
    const [randomizedArray, setRandomizedArray] = useState([])
    const [correct, setCorrect] = useState(true)
    const [counter, setCounter] = useState(0)
    const [score, setScore] = useState(0)
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

    const array = []
    for (let i = 0; i < 144; i++) {
      array.push("#" + Math.floor(Math.random()*16777215).toString(16))
    }
 
    useEffect(() => {
        setRandomizedArray(array)
        setRandomColor(array[Math.floor(Math.random() * 144)])
    }, [])

    function handleClickedTile (tile) {
        if (randomColor === tile) {
            console.log("yay")
            setRandomizedArray(array)
            setRandomColor(array[Math.floor(Math.random() * 144)])
            setCorrect(true)
            setCounter(counter + 1)
            setScore(counter+1)
        } else {
            console.log("nay")
            setRandomizedArray(array)
            setRandomColor(array[Math.floor(Math.random() * 144)])
            setCorrect(false)
            setCounter(0)
            document.body.style.background= "#FF1700"
            setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
        }
    }

    const tileGrid = randomizedArray.map((tile, index) => {
        return <ColorMatchTile key={index} tileColor={tile} index={index} onClickedTile={handleClickedTile}/>
    })

  return (
    <div className="fade-in"> 
        <h3>Death Color Match</h3>
        <h5>{correct ? `Level ${counter}` : `Latest Streak: ${score}`}</h5>
        <button className="game-button" disabled={correct} style={{opacity: correct ? ".5" : "1"}} onClick={handleOpen}>Save Score</button>
        <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style} className="modal">
            <form>
            <h2>Death Color Match</h2>
            <h3>Your score is: {score}</h3>
            <label>Enter your name:</label>
            <input className="game-input"></input>
            <input className="game-button" type="submit"/>
            </form>
          </Box>
      </Modal>
    <div style={{background: randomColor}} className="color-match"></div>
     <div className="twentyfourbysix-tile-container">
        {tileGrid}
     </div>
    </div>

  )
}

export default DeathColorMatch