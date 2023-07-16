import React from 'react';
import styles from "../../../styles/navbar.module.css";
import logo from "../../../images/logo.png";

export const Aside = () => {;
  return (
    <div className={styles.aside}>
      <div>
        <img src={logo} alt="Three Columns Studio."/>
      </div>        
    </div>
);
}
