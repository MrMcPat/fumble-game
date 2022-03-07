import React, {useState, useEffect} from 'react'
import ColorMatchTile from "./ColorMatchTile"

function DeathColorMatch() {
    const [clickedTile, setClickedTile] = useState("")
    const [randomColor, setRandomColor] = useState("")
    const [randomizedArray, setRandomizedArray] = useState([])
    const [counter, setCounter] = useState(0)

    const array = ["#F24A28", "#A73720", "#CA4327", "#F0B42B", "#CE9D2D", "#B38828", 
    "#BFEA35", "#9DC12A", "#87A626", "#23A44F", "#1D8641", "#1A7439", 
    "#43F8CE", "#38D7B2", "#2DB495", "#40B7D5", "#338FA6", "#2E7B8E", 
    "#437AEB", "#2C5DC2", "#214BA0", "#7146EC", "#5E3CBC", "#4E3498", 
    "#F3B6EE", "#E3ACDF", "#C692C3", "#EE367E", "#EA186A", "#C11659", 
    "#BFB9B9", "#CFC7C7", "#DDD4D4", "#32CFB7", "#1FB29C", "#199D8A",
    "#E6D09A", "#CFBC8D", "#C3B185", "#C0BD6D", "#D3CF75", "#A19F59",
    "#9BAF66", "#809254", "#B5CE75", "#AF7DDE", "#7F49B2", "#9248D7",
    "#642D97", "#562287", "#7E11E4", "#96DFA6", "#7CBA8A", "#6FA67B",
    "#DECCF6", "#CEBFE3", "#B9ACCB", "#E16B28", "#A74A15", "#F4AA80",
    "#6E2C06", "#7D4C30", "#8E3604", "#FE5F86", "#E05677", "#B54862",
    "#F7C510", "#F3D158", "#A88712", "#B39B44", "#F1D15E", "#F3DB81",
    "#F34670", "#C95A75", "#926570", "#D9AAB6", "#66152A", "#66152A",
    "#390714", "#F0688B", "#6F68F0", "#0F03EB", "#76749A", "#918EC8",
    "#44693B", "#45E71E", "#D4F9CB", "#B6FAA5", "#87E271", "#2FF7D4",
    "#A8F0E4", "#4CA393", "#73A199", "#456A64", "#0F4D42", "#507514",
    "#E32D2D", "#D4ACAC", "#EE9292", "#ECCACA", "#723636", "#661818",
    "#6B4B4B", "#E23287", "#DE88B1", "#E30D75", "#7B043E", "#F9087C",
    "#6F465A", "#6C324E", "#033EFE", "#7191F9", "#ACBEF8", "#D9E0F7",
    "#27ADF6", "#357AA1", "#1F9CE1", "#116898", "#486271", "#88C2E3",
    "#1BE871", "#5AAB7C", "#486F58", "#9DE1BA", "#1AF073", "#7CEEAC",
    "#08592A", "#4C8262", "#0FA5EE", "#6491A7", "#058C7B", "#0BE9CD",
    "#A6F3EA", "#05F020", "#DE0D62", "#792A4B", "#F78FBA", "#EB307D",
    "#EB3630", "#DBA3A1", "#914D4B", "#967574", "#541816", "#3A64E1"]
 
    useEffect(() => {
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random())
        setRandomizedArray(shuffledArray)
        setRandomColor(array[Math.floor(Math.random() * 144)])
    }, [])

    function handleClickedTile (tile) {
        setClickedTile(tile)
        if (randomColor === tile) {
            console.log("yay")
            setRandomizedArray(array.sort((a, b) => 0.5 - Math.random()))
            setRandomColor(array[Math.floor(Math.random() * 144)])
            setCounter(counter + 1)
        } else {
            console.log("nay")
            setRandomizedArray(array.sort((a, b) => 0.5 - Math.random()))
            setRandomColor(array[Math.floor(Math.random() * 144)])
            setCounter(0)
            document.body.style.background= "#FF1700"
            setTimeout(() => {document.body.style.background="#2FA4FF"}, 200)
        }
    }

    const tileGrid = randomizedArray.map((tile, index) => {
        return <ColorMatchTile key={index} tileColor={tile} index={index} onClickedTile={handleClickedTile}/>
    })

  return (
    <div>
        <h3>Color Match</h3>
        <h5>Level {counter}</h5>
    <div style={{background: randomColor}} className="color-match"></div>
     <div className="twentyfourbysix-tile-container">
        {tileGrid}
     </div>
    </div>

  )
}

export default DeathColorMatch