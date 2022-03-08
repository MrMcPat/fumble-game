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
import HighScores from "./HighScores";

function App() {
  return (
    <div className="">

      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/threebythreesequence">
          <ThreeByThreeSequence />
        </Route>
        <Route path="/fourbyfoursequence">
          <FourByFourSequence />
        </Route>
        <Route path="/fivebyfivesequence">
          <FiveByFiveSequence />
        </Route>
        <Route path="/easynumbermemory">
          <EasyNumberMemory />
        </Route>
        <Route path="/numbermemory">
          <NumberMemory />
        </Route>
        <Route path="/extremenumbermemory">
          <ExtremeNumberMemory />
        </Route>
        <Route path="/colormatch">
          <ColorMatch />
        </Route>
        <Route path="/crazycolormatch">
          <CrazyColorMatch />
        </Route>
        <Route path="/deathcolormatch">
          <DeathColorMatch />
        </Route>
        <Route path="/highscores">
          <HighScores />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
