import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link style={{textDecoration: "none"}} to="/"><h1>Back</h1></Link>
      <h1>Brain Fumble</h1>
      <Link style={{textDecoration: "none"}} to="/highscores"><h1>Leaderboards</h1></Link>

    </div>

  );
}

export default Navbar;
