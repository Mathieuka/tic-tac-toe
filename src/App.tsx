import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { isAligned } from "./utils";

function App() {
  const [player, setPlayer] = useState<null | string>(null);
  const [squares, setSquares] = useState<string[]>(
    Array.from({ length: 9 }, () => "")
  );

  useEffect(() => {
    if (isAligned(squares)) {
      alert(`Player's ${player} wins`);
    }
    setPlayer(() => (player === "1" ? "2" : "1"));
  }, [squares]);

  const onCheckSquare = (idx: number) => {
    if (!squares[idx]) {
      const newSquares = [...squares];
      newSquares[idx] = player === "1" ? "1" : "2";
      setSquares(newSquares);
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
              {player && player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
