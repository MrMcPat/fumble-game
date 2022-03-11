import React from "react";

function FiveByFiveTile({ tileNumber, randomTile, disable, onClickedNumber, correct, toggle}) {
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
      className={`fivebyfive-tile`}
      onClick={handleTileClick}
    >{toggle ? tileNumber : ""}</button>
  );
}

export default FiveByFiveTile;
