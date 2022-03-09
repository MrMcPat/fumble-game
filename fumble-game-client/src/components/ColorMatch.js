import React, {useState, useEffect} from 'react'
import ColorMatchTile from "./ColorMatchTile"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function ColorMatch() {
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

    const array = ["#E74C3C", "#F74C3C", "#A569BD", "#B569BD", "#5499C7", "#6499C7", 
    "#48C9B0", "#58C9B0", "#27AE60", "#37AE60", "#F4D03F", "#A4D03F", 
    "#F39C12", "#E39C12", "#B3B6B7", "#C3B6B7", "#641E16", "#441E16", 
    "#751E16", "#551E16", "#FADBD8", "#EADBD8", "#D6EAF8", "#C6EAF8", 
    "#DDD3EC", "#EDD3EC", "#F91DE4", "#A91DE4", "#0FF42D", "#1FF42D", 
    "#CF2352", "#DF2352", "#1BD1D8", "#1BD1D8", "#DD6F34", "#CD6F34"]
 
    useEffect(() => {
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random())
        setRandomizedArray(shuffledArray)
        setRandomColor(array[Math.floor(Math.random() * 36)])
    }, [])

    function handleClickedTile (tile) {
        if (randomColor === tile) {
            console.log("yay")
            setRandomizedArray(array.sort((a, b) => 0.5 - Math.random()))
            setRandomColor(array[Math.floor(Math.random() * 36)])
            setCorrect(true)
            setCounter(counter + 1)
            setScore(counter+1)
        } else {
            console.log("nay")
            setRandomizedArray(array.sort((a, b) => 0.5 - Math.random()))
            setRandomColor(array[Math.floor(Math.random() * 36)])
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
        <h3>Color Match</h3>
        <h5>{correct ? `Level ${counter}` : `Latest streak: ${score}`}</h5>
        <button className="game-button" onClick={handleOpen}>Save Score</button>
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
    <div style={{background: randomColor}} className="color-match"></div>
     <div className="sixbysix-tile-container">
        {tileGrid}
     </div>
    </div>

  )
}

export default ColorMatch