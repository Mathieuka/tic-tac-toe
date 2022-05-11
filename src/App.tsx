import React, { useState } from "react";
import styles from "./App.module.css";
// import logo from "./logo.svg";
// {<img src={logo} className={styles.appLogo} alt="logo" />}

function App() {
  const [squares, setSquares] = useState<string[]>(Array.from({ length: 9 }));

  const onCheckSquare = (idx: number) => {
    const newSquares = [...squares];
    if (!newSquares[idx]) {
      newSquares[idx] = "X";
      setSquares(newSquares);
    }
  };

  return (
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
  );
}

export default App;
