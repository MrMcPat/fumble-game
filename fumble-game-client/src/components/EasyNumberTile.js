import React from "react";

function EasyNumberTile({ tileNumber, randomNums }) {

  return (
    <button
      style={{
        animation: randomNums.includes(tileNumber) ? "randomAnimate 0.5s" : "",
      }}
      className={`sevenbyseven-tile`}
    >{tileNumber}</button>
  );
}

export default EasyNumberTile;
