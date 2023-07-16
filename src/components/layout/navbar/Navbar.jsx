import React from 'react';
import styles from "../../../styles/navbar.module.css";
import { Link } from "react-router-dom";

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
                    <Link to="/testing" className={styles.link}>
                        <div>
                            Home
                        </div>
                    </Link>
                    <span></span>
                    <Link to="/testing/aboutus" className={styles.link}>
                        <div>
                            About us
                        </div>
                    </Link>
                    <span></span>
                    <Link to="/testing/portfolio"  className={styles.link}>
                        <div>
                            Portfolio
                        </div>
                    </Link>
                </div>
                <div className={styles.contact}>
                    Contact
                </div>
            </div>
        </div>
    </div>
);
}
