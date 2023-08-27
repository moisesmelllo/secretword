import styles from './GameOver.module.css'

const GameOver = ({restart, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default GameOver