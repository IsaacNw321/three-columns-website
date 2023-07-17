import React from 'react';
import styles from "../../styles/about.module.css";

export const Projects = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.quantity}>
              70
            </div>
            <div className={styles.projectInfo}>
              Proyectos <br/> realizados.
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.quantity}>
              46
            </div>
            <div className={styles.projectInfo}>
              Casos <br/> de éxito.
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.quantity}>
              13
            </div>
            <div className={styles.projectInfo}>
              Clientes <br/> actuales.
            </div>
          </div>
        </div>
    </div>
  )
}
