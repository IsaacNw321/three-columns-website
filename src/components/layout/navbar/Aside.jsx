import React from 'react';
import styles from "../../../styles/navbar.module.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

export const Aside = () => {;
  return (
    <div className={styles.aside}>
      <Link to="/testing">
        <div>
          <img src={logo} alt="Three Columns Studio."/>
        </div>   
      </Link>     
    </div>
);
}
