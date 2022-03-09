import React from "react";
import { Link } from "react-router-dom";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


function Navbar() {
  return (
    <nav className="navbar">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <button class="back back--one">
          <span class="top-left"></span>
          <span class="top-right"></span>
          <span class="bottom-left"></span>
          <span class="bottom-right"></span>
          <span class="stalk"></span>
        </button>
      </Link>
      <h1>Brain Fumble</h1>
      <Link style={{ textDecoration: "none", color: "white" }} to="/highscores">
        <EmojiEventsIcon className="high-score-icon" sx={{ fontSize: 50 }}/>
      </Link>
    </nav>
  );
}

export default Navbar;
