import React from 'react';

const IndScoreCard = (props) => {
    const {player, course} = props
    return (
        <div className='hole-container'>
            <div className='ind-heading'>{player.firstName[0]}.{player.lastName[0]}.</div>
            {course.map((hole, idx) => {
                return <div className='hole' key={idx}>{hole.holeID}</div>
            })
            }
        </div>
    )
}
export default IndScoreCard;