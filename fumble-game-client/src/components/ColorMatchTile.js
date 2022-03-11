import React from 'react'

function ColorMatchTile({tileColor, onClickedTile}) {

    function handleClick() {
        onClickedTile(tileColor)
    }

  return (
    <button style={{background: `${tileColor}`}}className="sixbysix-tile fade-in-tile" onClick={handleClick}></button>
  )
}

export default ColorMatchTile