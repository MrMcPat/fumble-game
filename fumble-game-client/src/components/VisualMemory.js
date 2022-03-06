import React, {useState} from 'react'
import VisualTile from "./VisualTile"

function VisualMemory() {
const [count, setCount] = useState(3)
const [randomNums, setRandomNums] = useState([])

const tileCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

  const randomUnique = (range, count) => {
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
    return [...nums];
}

  function handleClick() {
    randomUnique(25, count).forEach(num => {
      
    })
    setRandomNums(randomUnique(25, count))
  }

const tileGrid = tileCount.map(tile => {
  return <VisualTile key={tile} tileNumber={tile} randomNums={randomNums}/>
})

  return (
    <div style={{height: "500px"}}>
      <h3>What are you doing here? You gonna get fumbled up!</h3>
      <button onClick={handleClick}>Start!</button>
      <button>Afraid to fumble?</button>
      <div className="sixbysix-tile-container">
       {tileGrid} 
      </div>
    </div>
  )
}

export default VisualMemory