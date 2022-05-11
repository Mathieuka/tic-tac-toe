import React from "react";
import styles from "./App.module.css";
// import logo from "./logo.svg";
// {<img src={logo} className={styles.appLogo} alt="logo" />}

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.square}>0</div>
        <div className={styles.square}>1</div>
        <div className={styles.square}>2</div>
        <div className={styles.square}>3</div>
        <div className={styles.square}>4</div>
        <div className={styles.square}>5</div>
        <div className={styles.square}>6</div>
        <div className={styles.square}>7</div>
        <div className={styles.square}>8</div>
      </div>
    </div>
  );
}

export default App;
