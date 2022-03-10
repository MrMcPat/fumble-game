import React from 'react'
 
function PopularGameMode({game_mode}) {
    return (
        <div className="ticker__item">
            <li>{game_mode.game_mode}</li>
        </div>
    )
}
 
export default PopularGameMode;