import React from 'react';
import styles from "../../styles/homepage.module.css";
import img from "../../images/branding.jpg";

export const Branding = () => {
  return (
    <>
      <div className={styles.container4}>
        <div className={styles.div1}>
          <span>
            Our services:
          </span>
          <div className={styles.servicesContainer}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.div2}>
          <h2>Branding</h2>
          <span>
            El branding es nuestro principal foco y punto de intervención.
          </span>
          <div></div>
          <h4>Ver más</h4>
        </div>
        <div className={styles.div3}>
          <img src={img} alt="Branding content."/>
        </div>
      </div>
    </>
  )
}
