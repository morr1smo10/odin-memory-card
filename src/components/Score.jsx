function Score({currentScore, highestScore}) {
  return (
    <div className="score">
      <p>Current Score: {currentScore}</p>
      <p>Highest Score: {highestScore}</p>
    </div>
  )
}

export default Score;