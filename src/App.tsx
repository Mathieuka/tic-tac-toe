import React from "react";
import styles from "./App.module.css";
import useTicTacToe from "./Provider/useTicTacToe";

function App() {
  const { onCheckSquare, squares, player, winner } = useTicTacToe();

  return (
    <div>
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
        <div className={styles.hasWin}>{winner && `Player ${player} wins`}</div>
      </div>
    </div>
  );
}

export default App;
