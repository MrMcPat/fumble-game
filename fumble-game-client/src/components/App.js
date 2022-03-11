import React from "react"
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
import audioBlip from "../assets/zapsplat-blip.mp3"
import audioFlash from "../assets/zapsplat-flash.mp3"

function App() {
  return (
    <div className="">

      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Menu logo={appLogo} audioOuch={audioOuch}/>
        </Route>
        <Route path="/threebythreesequence">
          <ThreeByThreeSequence audioFlash={audioFlash} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/fourbyfoursequence">
          <FourByFourSequence audioFlash={audioFlash} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/fivebyfivesequence">
          <FiveByFiveSequence audioFlash={audioFlash} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/easynumbermemory">
          <EasyNumberMemory audioType={audioType} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/numbermemory">
          <NumberMemory audioType={audioType} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/extremenumbermemory">
          <ExtremeNumberMemory audioType={audioType} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/colormatch">
          <ColorMatch audioBlip={audioBlip} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/crazycolormatch">
          <CrazyColorMatch audioBlip={audioBlip} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/deathcolormatch">
          <DeathColorMatch audioBlip={audioBlip} audioIncorrect={audioIncorrect}/>
        </Route>
        <Route path="/highscores">
          <HighScores audioIncorrect={audioIncorrect}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
