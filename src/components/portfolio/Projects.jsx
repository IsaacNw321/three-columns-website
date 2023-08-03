import React from 'react';
import styles from "../../styles/portfolio.module.css";
import img from "../../images/branding.jpg";

export const ProjectsPorfolio = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <h2>
                Project name
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias dignissimos sunt dolorem nam unde, possimus distinctio odio tempore sapiente eaque molestiae libero, eius numquam voluptate nemo ea atque sequi.
            </p>
            <span>
                01. Text
            </span>
        </div>
        <div className={styles.firstPhoto}>
            <img src={img} alt="First projecte reference"/>
        </div>
        <div className={styles.secondPhoto}>
            <img src={img} alt="Second projecte reference"/>
        </div>
    </div>
  )
}
