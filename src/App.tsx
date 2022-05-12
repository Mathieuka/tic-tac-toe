import React from "react";
import styles from "./App.module.css";
import useTicTacToe from "./Provider/useTicTacToe";

function App() {
  const { onCheckSquare, squares, player, winner } = useTicTacToe();

  return (
    <div>
      <div>Player's {player} turn to play</div>
      <div>{winner && `Player ${player} wins`}</div>
      <div className={styles.app}>
        <div className={styles.container}>
          {squares.map((player, index) => (
            <div
              data-testid={`square-${index}`}
              key={Math.random() * index}
              className={styles.square}
              onClick={() => onCheckSquare(index)}
            >
              {player && player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
