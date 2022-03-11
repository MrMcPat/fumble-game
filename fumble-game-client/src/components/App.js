import React, {useState} from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Menu from "./Menu"
import ThreeByThreeSequence from "./ThreeByThreeSequence"
import FourByFourSequence from "./FourByFourSequence"
import FiveByFiveSequence from "./FiveByFiveSequence"
import EasyNumberMemory from "./EasyNumberMemory"
import NumberMemory from "./NumberMemory"
import ExtremeNumberMemory from "./ExtremeNumberMemory"
import ColorMatch from "./ColorMatch"
import CrazyColorMatch from "./CrazyColorMatch"
import DeathColorMatch from "./DeathColorMatch"
import HighScores from "./HighScores"
import appLogo from "../assets/logo.png"
import audioIncorrect from "../assets/zapsplat-incorrect.mp3"
import audioOuch from "../assets/zapsplat-ouch.mp3"
import audioType from "../assets/zapsplat-type.mp3"
import audioKey from "../assets/zapsplat-key.mp3"
import audioBackspace from "../assets/zapsplat-backspace.mp3"
import audioBlip from "../assets/zapsplat-blip.mp3"
import audioFlash from "../assets/zapsplat-flash.mp3"
import audioMute from "../assets/zapsplat-mute.mp3"
import audioUnmute from "../assets/zapsplat-unmute.mp3"

function App() {
  const [mute, setMute] = useState(false)

  function handleMute() {
    setMute(mute => !mute)
  }

  return (
    <div className="">

      <Navbar onMute={handleMute} audioMute={audioMute} audioUnmute={audioUnmute}/>
      <footer>Developed by <a href="https://github.com/MrMcPat">Patrick Liang</a> and <a href="https://github.com/Fjguido">Francis Guido</a>. Logo and FavIcon designed and created by <a href="https://www.instagram.com/all.caffeine.no.sleep/">Vivian Li</a>. Sounds taken from <a href="https://www.zapsplat.com/">https://www.zapsplat.com/</a></footer>

      <Switch>
        <Route exact path="/">
          <Menu logo={appLogo} audioOuch={audioOuch} mute={mute}/>
        </Route>
        <Route path="/threebythreesequence">
          <ThreeByThreeSequence audioFlash={audioFlash} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/fourbyfoursequence">
          <FourByFourSequence audioFlash={audioFlash} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/fivebyfivesequence">
          <FiveByFiveSequence audioFlash={audioFlash} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/easynumbermemory">
          <EasyNumberMemory audioKey={audioKey} audioBackspace={audioBackspace} audioType={audioType} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/numbermemory">
          <NumberMemory audioKey={audioKey} audioType={audioType} audioBackspace={audioBackspace} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/extremenumbermemory">
          <ExtremeNumberMemory audioKey={audioKey} audioBackspace={audioBackspace} audioType={audioType} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/colormatch">
          <ColorMatch audioBlip={audioBlip} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/crazycolormatch">
          <CrazyColorMatch audioBlip={audioBlip} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/deathcolormatch">
          <DeathColorMatch audioBlip={audioBlip} audioIncorrect={audioIncorrect} mute={mute}/>
        </Route>
        <Route path="/highscores">
          <HighScores audioIncorrect={audioIncorrect}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
