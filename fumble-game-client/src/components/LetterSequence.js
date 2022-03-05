import React, { useState } from "react";

function LetterSequence() {
  const letterArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m" ];

  return (
    <div>
      <h3>Letter Sequence</h3>
      <div className="letter-tile-container">
        <div className="line1">
          <span>Q</span>
          <span>W</span>
          <span>E</span>
          <span>R</span>
          <span>T</span>
          <span>Y</span>
          <span>U</span>
          <span>I</span>
          <span>O</span>
          <span>P</span>
        </div>
        <div className="line2">
          <span>A</span>
          <span>S</span>
          <span>D</span>
          <span>F</span>
          <span>G</span>
          <span>H</span>
          <span>J</span>
          <span>K</span>
          <span>L</span>
        </div>
        <div className="line3">
          <span>{`😈`}</span>
          <span>Z</span>
          <span>X</span>
          <span>C</span>
          <span>V</span>
          <span>B</span>
          <span>N</span>
          <span>M</span>
          <span>{`😈`}</span>
        </div>
      </div>
    </div>
  );
}

export default LetterSequence;
