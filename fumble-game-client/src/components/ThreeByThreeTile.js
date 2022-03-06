import React from "react";

function ThreeByThreeTile({ tileNumber, randomTile, disable, onClickedNumber, toggle }) {
const animate = tileNumber === randomTile ? "randomAnimate 0.5s" : ""

  function handleTileClick() {
    onClickedNumber(tileNumber);
  }

  return (
    <button
      style={{
        animation: animate,
      }}
      disabled={!disable}
      className={`threebythree-tile`}
      onClick={handleTileClick}
    >{toggle ? tileNumber : ""}</button>
  );
}

export default ThreeByThreeTile;
