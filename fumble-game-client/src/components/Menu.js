import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div className="menu-container">
      <Link to="/threebythreesequence" className="menu-link">Sequence Memory (3x3)</Link>
      <Link to="/fourbyfoursequence" className="menu-link">Sequence Memory (4x4)</Link>
      <Link to="/fivebyfivesequence" className="menu-link">Sequence Memory (5x5)</Link>
      <Link to="/easynumbermemory" className="menu-link">Easy Number Memory</Link>
      <Link to="/numbermemory" className="menu-link">Number Memory</Link>
      <Link to="/extremenumbermemory" className="menu-link">Extreme Number Memory</Link>
      <Link to="/colormatch" className="menu-link">Color Match</Link>
      <Link to="/crazycolormatch" className="menu-link">Crazy Color Match</Link>
      <Link to="/deathcolormatch" className="menu-link">Death Color Match</Link>
    </div>
  )
}

export default Menu