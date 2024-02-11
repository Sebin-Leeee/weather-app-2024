import React from "react";
import styles from "./Instruction.module.css";

const Instruction: React.FC = () => {
  return (
    <>
      <div className={styles.instrunction}>
        <p>
          <span className={styles.bold}>Welcome to WEATHERMATE!👋🏼</span>{" "}
        </p>
        <p>Enter a city to get weather information.</p>
        <p>You can get the city's current weather and 5-day forecast!</p>
      </div>
    </>
  );
};

export default Instruction;
