import React from "react";
import styles from "./App.module.css";
import useTicTacToe from "./Provider/useTicTacToe";

function App() {
  const { squares, onCheckSquare, player } = useTicTacToe();

  return (
    <div>
      <div>Player's {player} turn to play</div>
      <div className={styles.app}>
        <div className={styles.container}>
          {squares.map((player, index) => (
            <div
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
