import React, {useState} from 'react'
import './App.css';

import PlayerForm from './components/playerForm'
import ScoreCard from './components/scoreCard'

function App() {
  const [players, setPlayers] = useState([]);

  const addToGame = (playerArray) => {
    setPlayers([
      ...players,
      ...playerArray])
  }
  return (
    <div className="App">
      <h1>Settle UP</h1>
      <p>The Golf betting App</p>
      <PlayerForm add={addToGame}/>
      <ScoreCard players={players}/>
    </div>
  );
}

export default App;
