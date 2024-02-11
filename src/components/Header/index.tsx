import React, { useState } from "react";
import axios from "axios";
import styles from "./Header.module.css";
import WeatherSearch from "../Search/weatherSearch";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`flex items-center relative`}>
          <img src={"/Logo.png"} alt="Logo" className={`max-h-32 mr-3`} />{" "}
        </div>
      </header>
    </>
  );
};

export default Header;
