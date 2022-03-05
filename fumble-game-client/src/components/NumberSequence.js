import React, {useState} from 'react'
import NumberTile from "./NumberTile"

function NumberSequence() {

  const tileNumbers = [1, 2, 3,
                      4, 5, 6,
                      7, 8, 9,
                      0]

  // const numberGrid = tileNumbers.map(number => {
  //   return <NumberTile key={tileNumbers.indexOf(number)} number={number}/>
  // })
  return (
    <div>
      <h3>Number Sequence</h3>
      <div className="number-tile-container">
        <div className="line1">
          <span>7</span>
          <span>8</span>
          <span>9</span>
   
        </div>
        <div className="line2">
          <span>4</span>
          <span>5</span>
          <span>6</span>
  
        </div>
        <div className="line3">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="line4">
          <span>0</span>
        </div>
      </div>
    </div>
  )
}

export default NumberSequence