import React from "react";
import styles from "./App.module.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className={styles.App}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
    </div>
  );
}

export default App;
