import React, {useState} from 'react'

function ColorMatchTile({tileColor, onClickedTile, index}) {
    // const [disable, setDisable] = useState(false)

    function handleClick() {
        onClickedTile(tileColor)
        // setDisable(true)
    }

  return (
    <button style={{background: `${tileColor}`}}className="sixbysix-tile" onClick={handleClick}></button>
  )
}

export default ColorMatchTile