import React from 'react';
import styles from '../styles/thanku.module.css';
import "../styles/animations.css";
import logo from '../images/logowithname.png';

export const ThankU = () => {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <img src={logo} alt="Three Columns Logo" className={styles.logo}/>
        <div>
          <span>
            We&apos;re working on or website.
          </span>
        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.building}>
          <span className="animated fadeInLeft">
            Thank you!
          </span>
        </div>

        <span className={styles.line}></span>

        <div className={styles.contact}>
          <div>
            <p>
              All rights reserved &#169; 2023.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
};
