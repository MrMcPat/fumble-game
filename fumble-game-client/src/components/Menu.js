import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/clicksequence">Click Sequence</Link>
      <Link to="/lettersequence">Letter Sequence</Link>
      <Link to="/numbersequence">Number Sequence</Link>
    </div>
  )
}

export default Menu