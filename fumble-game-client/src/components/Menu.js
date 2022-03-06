import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/threebythreesequence">Sequence Memory (3x3)</Link>
      <Link to="/fourbyfoursequence">Sequence Memory (4x4)</Link>
      <Link to="/fivebyfivesequence">Sequence Memory (5x5)</Link>
      <Link to="/numbermemory">Number Memory</Link>
      <Link to="/extremenumbermemory">Extreme Number Memory</Link>
    </div>
  )
}

export default Menu