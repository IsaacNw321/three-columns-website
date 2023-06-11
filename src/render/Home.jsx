import React from 'react';
import styles from '../styles/home.module.css';
import logo from '../images/logowithname.png';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <img src={logo} alt="Three Columns Logo" className={styles.logo}/>
        <div>
          <span>
            We're working on or website.
          </span>
        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.building}>
          <span>
            We're <br/> building
          </span>
        </div>

        <div className={styles.contact}>

          <div>
            <span>
              Contact Us!
            </span>
          </div>

          <div>
            <p>
              All rights reserved &#169; 2023.
            </p>
          </div>
        </div>
      </div>

      <Link to='/contact'>
        <div class="center-con">    
          <div class="round">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>    
        </div>
      </Link>
    </div>
  )
};
