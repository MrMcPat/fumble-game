import React from "react";

function ClickTile({ tileNumber, randomTile, disable, onClickedNumber }) {

    const animateTile = tileNumber === randomTile ? `click-tile-${randomTile}` : ""

  function handleTileClick() {
    onClickedNumber(tileNumber)
  }
 
  return <button disabled={!disable} className={`click-tile ${animateTile}`} onClick={handleTileClick}></button>;
}

export default ClickTile;
