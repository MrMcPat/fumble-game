import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
import ClickSequence from "./ClickSequence";
import LetterSequence from "./LetterSequence";
import NumberSequence from "./NumberSequence";

function App() {
  return (
    <div>
      <Navbar/>

      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/clicksequence">
          <ClickSequence />
        </Route>
        <Route path="/lettersequence">
          <LetterSequence />
        </Route>
        <Route path="/numbersequence">
          <NumberSequence />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
