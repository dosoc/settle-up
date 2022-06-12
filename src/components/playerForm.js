import React, {useState} from 'react';
import PlayerCard from './playerCard'

const initialFormValues = {
    firstName: "",
    lastName: "",
    handicap: ''
    
}

const PlayerForm = (props) => {
    const [players, setPlayers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const { add } = props

    const addPlayer = (evt) => {
        evt.preventDefault();
        const newPlayer = {...formValues}
        setPlayers([...players, newPlayer])
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
        setPlayers([...filteredPlayers])
    }

    const editPlayer = (evt) => {
        const filteredPlayers = players.filter(player => player.firstName !== evt.target.name);
        const findPlayer = players.find(player => player.firstName === evt.target.name)
        setFormValues({...findPlayer})
        setPlayers([...filteredPlayers])

    }

    const addPlayersToGame = () => {
        add(players)
        setPlayers([])
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
                 {players.map((player, idx) => <PlayerCard key={idx} player={player} remove={removePlayer} edit={editPlayer}/>)}
            </div>
           
            <button onClick={addPlayersToGame}>Add All to Game</button>
        </div>
    )
}

export default PlayerForm;