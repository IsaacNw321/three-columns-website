import React from 'react';
import styles from "../../styles/portfolio.module.css";
import img from "../../images/branding.jpg";

export const Photos = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.bigPhoto}>
            <img src={img} alt="First brand reference"/>
        </div>
        <div className={styles.littlePhoto}>
            <img src={img} alt="Second brand reference"/>
        </div>
    </div>
  )
}
