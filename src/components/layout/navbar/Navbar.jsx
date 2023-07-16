import React from 'react';
import styles from "../../../styles/navbar.module.css";

export const Navbar = () => {;
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                Three Columns Studio&#169;
                <br/>
                <span>
                    Creative studio specialized on Branding.
                    <br/>
                    Marketing & brand waranty.
                </span>
            </div>
            <div className={styles.buttonsBar}>
                <div className={styles.buttonsGroup}>
                    <div>
                        Home
                    </div>
                    <span></span>
                    <div>
                        About us
                    </div>
                    <span></span>
                    <div>
                        Portfolio
                    </div>
                </div>
                <div className={styles.contact}>
                    Contact
                </div>
            </div>
        </div>
    </div>
);
}
