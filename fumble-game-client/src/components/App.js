import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
import ClickSequence from "./ClickSequence";
import LetterSequence from "./LetterSequence";
import NumberSequence from "./NumberSequence";
import HighScores from "./HighScores";

function App() {
  return (
    <div>
      <Navbar/>
      <Menu />

      <Switch>
        <Route path="/clicksequence">
          <ClickSequence />
        </Route>
        <Route path="/lettersequence">
          <LetterSequence />
        </Route>
        <Route path="/numbersequence">
          <NumberSequence />
        </Route>
        <Route path="/highscores">
          <HighScores />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
