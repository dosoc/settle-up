import React, {useState} from 'react'
import './App.css';

import PlayerForm from './components/playerForm'
import ScoreCard from './components/scoreCard'
import ScoreForm from './components/enterScoreForm'

function App() {
  const [players, setPlayers] = useState([]);
  const [course, setCourse] = useState([]);

  const addToGame = (playerArray) => {
    setPlayers([
      ...players,
      ...playerArray])
  }
  return (
    <div className="App">
      <h1>Settle UP</h1>
      <p>The Golf betting App</p>
      <PlayerForm add={addToGame} players={players} setPlayers={setPlayers}/>
      {players? <ScoreForm players={players}/>:<div></div>}
      <ScoreCard players={players} course={course} setCourse={setCourse}/>
    </div>
  );
}

export default App;
