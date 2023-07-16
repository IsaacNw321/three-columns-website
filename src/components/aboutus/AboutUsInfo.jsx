import React from 'react';
import styles from "../../styles/about.module.css";

export const AboutUsInfo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            About us
        </div>
        <div className={styles.info}>
            <p>
                Es un estudio creativo especializado en la creación y desarrollo de Branding compuesto 
                por 3 integrantes con sede en República Dominicana. El branding es nuestro principal foco 
                y punto de intervención. Definimos estrategias de marca, nombres, creamos identidades 
                a medida, empaques, etiquetas, plataformas de marketing y garantías de marca. 
            </p>
            <br/>
            <br/>
            <span>
                Como estudio creativo no solo somos responsables de cómo la marca se ve, también en como la 
                marca funciona tanto a nivel externo como interno. Asesoramos y entrenamos a nuestros clientes a 
                gestionar equipos & manejo de marca.
            </span>
        </div>
    </div>
  )
}
