import React from 'react';
import styles from "../../styles/navbar.module.css";
import { Aside } from './navbar/Aside';
import { Navbar } from './navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
        <div className={styles.asideContainer}>
            <Aside />
        </div>
        <div className={styles.contentContainer}>
            <Navbar />
            <div className={styles.containerOfContent}>
            {children}
            </div>
        </div>
    </div>
  );
};
