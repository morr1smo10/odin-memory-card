import { useState } from 'react'
import Header from './components/Header'
import Score from './components/Score'
import Game from './components/Game'

function App() {
  return (
    <>
      <Header></Header>
      <div className="score_game">
        <Score></Score>
        <Game></Game>
      </div>
    </>
  )
}

export default App
