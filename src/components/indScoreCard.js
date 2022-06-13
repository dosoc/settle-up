import React from 'react';

const IndScoreCard = (props) => {
    const {player, course} = props
    return (
        <div className='hole-container'>
            <div className='ind-heading heading'>{player.firstName[0]}.{player.lastName[0]}.</div>
            {player.score.map((holeScore, idx) => {
                return <div className='playerScore hole' key={idx}>{holeScore}</div>
            })
            }
        </div>
    )
}
export default IndScoreCard;