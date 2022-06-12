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
            <div className='hole-container'>
                <div className='hole'>
                    <div className='hole-id heading'>Hole</div>
                    <div className='hole-par heading'>Par</div>
                    <div className='hole-hcp heading'>HCP</div>
                </div>
                {course.map(hole => {
                    return(
                        <div className='hole' key={hole.holeID}>
                            <div className='hole-id'>{hole.holeID}</div>
                            <div className='hole-par'>{hole.par}</div>
                            <div className='hole-hcp'>{hole.handicap}</div>
                        </div>
                    )
                })}
            </div>
            <div className='hole-container'>
                {players?players.map((player, idx) => <IndScoreCard key={idx} player={player} course={course}/> ):<p>add players</p>}
            </div>
           
        </div>
    )
}
export default ScoreCard;