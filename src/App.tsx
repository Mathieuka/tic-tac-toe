import React from "react";
import styles from "./App.module.css";
import useTicTacToe from "./Provider/useTicTacToe";

function App() {
  const {
    onCheckSquare,
    squares,
    player,
    gameState: { hasWin, isDraw },
    reset,
  } = useTicTacToe();

  return (
    <div>
      <button onClick={reset} className={styles.reset}>
        Reset
      </button>
      <div className={styles.app}>
        <div className={styles.playerTurn}>Player's {player} turn to play</div>
        <div className={styles.container}>
          {squares.map((player, index) => (
            <div
              data-testid={`square-${index}`}
              key={Math.random() * index}
              className={`${styles[`square-${index}`]} ${styles.square}`}
              onClick={() => onCheckSquare(index)}
            >
              {player === "1" && "X"}
              {player === "2" && "O"}
            </div>
          ))}
        </div>
        <div className={styles.hasWin}>
          {hasWin && `Player ${player} wins`}
          {isDraw && `Draw !`}
        </div>
      </div>
    </div>
  );
}

export default App;
