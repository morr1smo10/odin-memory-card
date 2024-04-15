import { useState } from 'react'
import Header from './components/Header'
import Score from './components/Score'
import Game from './components/Game'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <>
      <Header></Header>
      <div className="score_game">
        <Score currentScore={currentScore} highestScore={highestScore}></Score>
        <Game currentScore={currentScore} 
        highestScore={highestScore} 
        setCurrentScore={setCurrentScore} 
        setHighestScore={setHighestScore}></Game>
      </div>
    </>
  )
}

export default App
