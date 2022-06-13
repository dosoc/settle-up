import React, {useState} from 'react';
import IndScoreCard from './indScoreCard'

import courseData from '../data/courseData'

const ScoreCard = (props) => {
    const [course, setCourse] = useState([])
    const {players} = props

    const onSelect = (evt) => {
        setCourse(courseData[evt.target.value])
    }
    return (
        <div className='container score-card'>
            <h2>Select a Course</h2>
            <select onChange={onSelect}>
                <option>--Avalible Courses--</option>
                {Object.keys(courseData).map((course, idx) => <option value={course} key={idx}>{course}</option>)}
            </select>
            <div className='line-container'>
                <div className='hole-container'>
                    <div className='heading'>
                        <div className='hole-id'>Hole</div>
                        <div className='hole-par'>Par</div>
                        <div className='hole-hcp'>HCP</div>
                    </div>
                    {course.map(hole => {
                        return(
                            <div className='hole' key={hole.holeID}>
                                <div className='hole-id box'>{hole.holeID}</div>
                                <div className='hole-par box'>{hole.par}</div>
                                <div className='hole-hcp box'>{hole.handicap}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='playerScore-container'>
                    {players? players.map((player, idx) => {
                        return(<IndScoreCard key={idx} player={player} course={course}/>)})
                        : <div>Add Players</div>
                    }
                </div>
            </div>
        </div>
    )
}
export default ScoreCard;