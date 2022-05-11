import React, { useState } from "react";
import styles from "./App.module.css";
// import logo from "./logo.svg";
// {<img src={logo} className={styles.appLogo} alt="logo" />}

function App() {
  const [squares, setSquares] = useState<string[]>(Array.from({ length: 9 }));
  const [player, setPlayer] = useState("1");

  const onCheckSquare = (idx: number) => {
    if (!squares[idx]) {
      const newSquares = [...squares];
      newSquares[idx] = "X";
      setSquares(newSquares);
      setPlayer(() => (player === "1" ? "2" : "1"));
    }
  };

  return (
    <div>
      <div>Player's {player} turn to play</div>
      <div className={styles.app}>
        <div className={styles.container}>
          {squares.map((value: string, index) => (
            <div
              key={Math.random() * index}
              className={styles.square}
              onClick={() => onCheckSquare(index)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
