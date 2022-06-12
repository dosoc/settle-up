import React from 'react';

const PlayerCard = (props) => {
    const {player, remove, edit} = props
    return(
        <div className='player-card'>
            <h3>{player.firstName} {player.lastName}</h3>
            <p>Handicap: {player.handicap}</p>
            <button name={player.firstName} onClick={remove}>Remove Player</button>
            <button name={player.firstName} onClick={edit}>Edit Player</button>
        </div>
    )
}

export default PlayerCard;