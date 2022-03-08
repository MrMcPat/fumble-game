import React from "react";
import {Link} from "react-router-dom"
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Navbar() {
  return (
    <div className="navbar">
      <Link style={{textDecoration: "none", color: "white"}} to="/"><ArrowBackIcon fontSize="large"/></Link>
      <h1>Brain Fumble</h1>
      <Link style={{textDecoration: "none", color: "white"}} to="/highscores"><ScoreboardIcon fontSize="large"/></Link>
    </div>
  );
}

export default Navbar;
