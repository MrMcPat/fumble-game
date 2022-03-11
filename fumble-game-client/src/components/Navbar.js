import React, {useState} from "react";
import { Link } from "react-router-dom";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


function Navbar({onMute, audioMute, audioUnmute}) {
  const [muteToggle, setMuteToggle] = useState(false)

  function handleClick() {
    onMute()
    setMuteToggle(muteToggle => !muteToggle)
    if (muteToggle) {
      new Audio(audioMute).play()
    } else {
      new Audio(audioUnmute).play()
    }
  }

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
      <button className="mute-button" onClick={handleClick}>{muteToggle ? <VolumeOffIcon sx={{ fontSize: 60 }}/> : <VolumeUpIcon sx={{ fontSize: 60 }}/>}</button>
      <h1>Brain Fumble</h1>
      <Link style={{ textDecoration: "none", color: "white" }} to="/highscores">
        <EmojiEventsIcon className="high-score-icon" sx={{ fontSize: 60 }}/>
      </Link>
    </nav>
  );
}

export default Navbar;
