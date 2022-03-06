import React from "react";

function FiveByFiveTile({ tileNumber, randomTile, disable, onClickedNumber }) {
  function handleTileClick() {
    onClickedNumber(tileNumber);
  }

  return (
    <button
      style={{
        animation: tileNumber === randomTile ? "randomAnimate 0.5s" : "",
      }}
      disabled={!disable}
      className={`fivebyfive-tile`}
      onClick={handleTileClick}
    >{tileNumber}</button>
  );
}

export default FiveByFiveTile;
