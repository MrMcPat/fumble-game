import React from "react";

function ExtremeNumberTile({ tileNumber, randomNums }) {

  return (
    <button
      style={{
        animation: randomNums.includes(tileNumber) ? "randomAnimate 0.5s" : "",
      }}
      className={`extreme-tile`}
    >{tileNumber}</button>
  );
}

export default ExtremeNumberTile;
