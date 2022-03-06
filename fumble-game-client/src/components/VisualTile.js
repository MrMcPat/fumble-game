import React, { useState, useEffect } from "react";

function VisualTile({ tileNumber, randomNums }) {


  return (
    <button
      style={{
        animation: randomNums.includes(tileNumber) ? "randomAnimate 0.5s" : "",
      }}
      className={`sixbysix-tile`}
    ></button>
  );
}

export default VisualTile;
