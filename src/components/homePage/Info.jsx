import React from 'react';
import styles from "../../styles/homepage.module.css";


export const Info = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.info2}>
            <p>
                Es un <span>estudio creativo</span> especializado en la creación y desarrollo de Branding compuesto por 3 integrantes con sede en 
                República Dominicana. El branding es nuestro principal foco y punto de intervención. Definimos estrategias de marca, 
                nombres, creamos identidades a medida, empaques, etiquetas, plataformas de marketing y garantías de marca. 
                <br/>
                <br/>
                Como estudio creativo no solo somos responsables de cómo la marca se ve, también en como la marca funciona tanto a 
                nivel externo como interno. Asesoramos y entrenamos a nuestros clientes a gestionar equipos & manejo de marca.
            </p>
        </div>
        <div className={styles.competencias}>
            <div className={styles.competenciasList}>
                <span>
                    Nuestras competencias:
                </span>
                <ul>
                    <li>Branding</li>
                    <li>Identidad visual</li>
                    <li>Merchandinsing</li>
                    <li>Packaging</li>
                    <li>Plataformas de Marketing</li>
                    <li>Garantías de marca</li>
                    <li>Asesoramiento y gestión</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
