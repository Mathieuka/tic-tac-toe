import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { horizontallyAligned } from "./utils";

function App() {
  const [squares, setSquares] = useState<string[]>(
    Array.from({ length: 9 }, () => "")
  );
  const [player, setPlayer] = useState("1");

  useEffect(() => {
    if (horizontallyAligned(squares)) {
      alert(`Player's ${player} wins`);
    }
  }, [squares]);

  const onCheckSquare = (idx: number) => {
    if (!squares[idx]) {
      const newSquares = [...squares];
      newSquares[idx] = player === "1" ? "1" : "2";
      setSquares(newSquares);
      setPlayer(() => (player === "1" ? "2" : "1"));
    }
  };

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
              {player && "X"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
