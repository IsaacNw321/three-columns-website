import React from 'react';
import styles from "../../styles/portfolio.module.css";

export const Testimonials = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.testimonials}>
            <h2>
                Testimonials
            </h2>
            <div className={styles.arrowsContainer}>
                <div className={styles.arrows}></div>
                <div className={styles.arrows}></div>
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus pariatur ducimus iusto adipisci fugit eaque ipsam, similique mollitia beatae voluptates provident accusamus debitis tempora, aut quaerat dignissimos ipsum, itaque eligendi!
            </p>
        </div>
        <div className={styles.brands}>
            <div className={styles.titleBrand}>
                Brand name
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellat? Odit ipsam numquam cum quaerat delectus? Consequatur consectetur unde, officia, itaque id illo eos quod ipsam necessitatibus libero, amet quos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellat? Odit ipsam numquam cum quaerat delectus? Consequatur consectetur unde, officia, itaque id illo eos quod ipsam necessitatibus libero, amet quos?
            </p>
            <div className={styles.clientCard}>
                <div className={styles.clientAvatar}>

                </div>
                <div className={styles.clientInfo}>
                    <h3>Client Name</h3>
                    <h5>Roll & position</h5>
                </div>
            </div>
        </div>
        <div className={styles.blur}></div>
    </div>
  )
}
