import React from "react";
import styles from "../../../styles/common/Footer.module.css";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.logoContainer}>
          <h2 className={styles.name}>Kjetil Øverby</h2>
        </div>

        <br />
        <p className={styles.text}>Konglebækvegen 9, 2270 Flisa</p>
        <p className={styles.text}>Tlf: 97541236</p>
        <p className={styles.text}>Email: ktldesign80@gmail.com</p>
      </div>
      <div className={styles.thirdContainer}>
        <p className={styles.logoText}>ktl_design</p>
      </div>
    </div>
  );
};

export default FooterComponent;
