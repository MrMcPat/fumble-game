import React from "react";

function ThreeByThreeTile({ tileNumber, randomTile, disable, onClickedNumber, toggle }) {

  function handleTileClick() {
    onClickedNumber(tileNumber);
  }

  return (
    <button
      style={{
        animation: tileNumber === randomTile ? "randomAnimate 0.5s" : "",
      }}
      disabled={!disable}
      className={`threebythree-tile`}
      onClick={handleTileClick}
    >{toggle ? tileNumber : ""}</button>
  );
}

export default ThreeByThreeTile;
