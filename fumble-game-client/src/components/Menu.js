import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div className="menu-page fade-in">
      <h2>How do you like your brain fumbled?</h2>
    <div className="menu-container">
      <Link to="/threebythreesequence" className="menu-link"><button className="menu-button">Sequence Memory (3x3)</button></Link>
      <Link to="/fourbyfoursequence" className="menu-link"><button className="menu-button">Sequence Memory (4x4)</button></Link>
      <Link to="/fivebyfivesequence" className="menu-link"><button className="menu-button">Sequence Memory (5x5)</button></Link>
      <Link to="/easynumbermemory" className="menu-link"><button className="menu-button">Easy Number Memory</button></Link>
      <Link to="/numbermemory" className="menu-link"><button className="menu-button">Number Memory</button></Link>
      <Link to="/extremenumbermemory" className="menu-link"><button className="menu-button">Extreme Number Memory</button></Link>
      <Link to="/colormatch" className="menu-link"><button className="menu-button">Color Match</button></Link>
      <Link to="/crazycolormatch" className="menu-link"><button className="menu-button">Crazy Color Match</button></Link>
      <Link to="/deathcolormatch" className="menu-link"><button className="menu-button">Death Color Match</button></Link>
    </div>
    </div>
  )
}

export default Menu