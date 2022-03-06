import React from "react";

function NumberTile({ tileNumber, randomNums }) {

  return (
    <button
      style={{
        animation: randomNums.includes(tileNumber) ? "randomAnimate 0.5s" : "",
      }}
      className={`massive-tile`}
    >{tileNumber}</button>
  );
}

export default NumberTile;
