import React, {useState} from 'react';
import PlayerCard from './playerCard'

const initialFormValues = {
    firstName: "",
    lastName: "",
    handicap: '',
    score: ['','','','','','','','','','','','','','','','','','',]
    
}

const PlayerForm = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [stagedPlayers, setStagedPlayers] = useState([])
    const { add, players } = props

    const addPlayer = (evt) => {
        evt.preventDefault();
        const newPlayer = {...formValues}
        setStagedPlayers([...stagedPlayers, newPlayer])
        setFormValues(initialFormValues)
    }

    const onChange = (evt) => {
        const {name, value} = evt.target
        setFormValues({
            ...formValues,
            [name]: value
        })
        
    }

    const removePlayer = (evt) => {
        const filteredPlayers = players.filter(player => player.firstName !== evt.target.name);
        setStagedPlayers([...filteredPlayers])
    }

    const editPlayer = (evt) => {
        const filteredPlayers = stagedPlayers.filter(player => player.firstName !== evt.target.name);
        const findPlayer = players.find(player => player.firstName === evt.target.name)
        setFormValues({...findPlayer})
        setStagedPlayers([...filteredPlayers])

    }

    const addPlayersToGame = () => {
        add(stagedPlayers)
        setStagedPlayers([])
    }
    return(
        <div className='container player-form'>
            <form onSubmit={addPlayer}>
                <h2>Add a Player</h2>
                <input
                    type='text'
                    name='firstName'
                    value={formValues.firstName}
                    placeholder='First Name'
                    onChange={onChange}/>
                <input
                    type='text'
                    name='lastName'
                    value={formValues.lastName}
                    placeholder='Last Name'
                    onChange={onChange}/>
                <input
                    type='number'
                    name='handicap'
                    value={formValues.handicap}
                    placeholder='Course Handicap'
                    onChange={onChange}/>
                <button>Add Player</button>
            </form>
            <h2>Player Staging</h2>
            <div className='player-card-container'>
                 {stagedPlayers.map((player, idx) => <PlayerCard key={idx} player={player} remove={removePlayer} edit={editPlayer}/>)}
            </div>
           
            <button onClick={addPlayersToGame}>Add All to Game</button>
        </div>
    )
}

export default PlayerForm;