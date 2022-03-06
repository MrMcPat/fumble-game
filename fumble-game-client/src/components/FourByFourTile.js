import React from "react";

function FourByFourTile({ tileNumber, randomTile, disable, onClickedNumber }) {
  function handleTileClick() {
    onClickedNumber(tileNumber);
  }

  return (
    <button
      style={{
        animation: tileNumber === randomTile ? "randomAnimate 0.5s" : "",
      }}
      disabled={!disable}
      className={`fourbyfour-tile`}
      onClick={handleTileClick}
    >{tileNumber}</button>
  );
}

export default FourByFourTile
