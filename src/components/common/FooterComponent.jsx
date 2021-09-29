import React from "react";
import styles from "../../../styles/common/Footer.module.css";
import logo from "../../../assets/ktl_design logo.png";
import Image from "next/image";

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
        <Image src={logo} />
      </div>
    </div>
  );
};

export default FooterComponent;
