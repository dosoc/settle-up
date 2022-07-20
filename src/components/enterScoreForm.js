import React, {useState} from 'react';

// take in players in game and provide a form to set each player a hole by hole score.
// display scores on scorecard
// front 9 back 9 total

const initialFormData = {
    player: '',
    holeScores: []
}

const ScoreForm = (props) => {
    const [formData, setFormData] = useState(initialFormData)
    const {players} = props

    const onChange = () => {

    }

    return(
        <div>
            <h2>Enter Scores</h2>
           {players.map(player => {
            return <form>
                <input 
                    type='number'/>
            </form>
           })} 
        </div>
        
    )
}
export default ScoreForm;