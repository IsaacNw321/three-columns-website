import React from 'react';
import styles from "../../styles/homepage.module.css";
import image from "../../images/branding.jpg";

export const Content = () => {
  return (
    <>
      <div className={styles.logo}>
      Three Columns Studio&#169;
      <br/>
      <span>
          Creative studio specialized on Branding.
          <br/>
          Marketing & brand waranty.
      </span>
      </div>
      <div className={styles.container}>
          <div className={styles.info}>
            <span>
                We are a creative studio.
            </span>
            <button className={styles.button}>
                Take a look
            </button>
          </div>
          <div className={styles.image}>
              <img src={image} alt="Branding."/>
          </div>
      </div>
    </>
  )
}
