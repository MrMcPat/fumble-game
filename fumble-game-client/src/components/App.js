import React from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Menu from "./Menu"
import ThreeByThreeSequence from "./ThreeByThreeSequence"
import FourByFourSequence from "./FourByFourSequence"
import FiveByFiveSequence from "./FiveByFiveSequence"
import NumberMemory from "./NumberMemory"
import LetterMemory from "./LetterMemory"

import HighScores from "./HighScores";

function App() {
  return (
    <div>
      <Navbar/>
      <Menu />

      <Switch>
        <Route path="/threebythreesequence">
          <ThreeByThreeSequence />
        </Route>
        <Route path="/fourbyfoursequence">
          <FourByFourSequence />
        </Route>
        <Route path="/fivebyfivesequence">
          <FiveByFiveSequence />
        </Route>
        <Route path="/numbermemory">
          <NumberMemory />
        </Route>
        <Route path="/lettermemory">
          <LetterMemory />
        </Route>
        <Route path="/highscores">
          <HighScores />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
