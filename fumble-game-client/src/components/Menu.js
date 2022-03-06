import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/threebythreesequence">EASY (3x3)</Link>
      <Link to="/fourbyfoursequence">MEDIUM (4x4)</Link>
      <Link to="/fivebyfivesequence">HARD (5x5)</Link>
      <Link to="/numbermemory">Number Memory</Link>
      <Link to="/lettermemory">Letter Memory</Link>
    </div>
  )
}

export default Menu