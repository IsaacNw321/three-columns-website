import React from 'react';
import styles from "../../styles/about.module.css";
import img from "../../images/branding.jpg";

export const ImgComponent = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.asesoramiento}>
            Asesoramos y entrenamos a nuestros clientes a 
            gestionar equipos & manejo de marca.
        </div>
        <div className={styles.asesoramientoImg}>
            <img src={img} alt="Asesoramiento de marca"/>
        </div>
    </div>
  )
}
