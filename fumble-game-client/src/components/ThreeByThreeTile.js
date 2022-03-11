import React from "react";

function ThreeByThreeTile({ tileNumber, randomTile, disable, onClickedNumber, correct, toggle}) {
const animate = tileNumber === randomTile ? "randomAnimate 0.5s" : ""

  function handleTileClick() {
    onClickedNumber(tileNumber);
  }

  return (
    <button
      style={{
        animation: correct ? animate : "wrongAnimate 0.5s",
      }}
      disabled={!disable}
      className={`threebythree-tile`}
      onClick={handleTileClick}
    >{toggle ? tileNumber : ""}</button>
  );
}

export default ThreeByThreeTile;
