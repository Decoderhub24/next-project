import React from "react";
import Navbar from './components/navbar';
import Subscribe from './components/subscribe';
import Footerlast from './components/footerlast';
import styles from "./styles/About.module.scss"; 

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutpage}>
        <div className={styles.imagesection}>
        </div>
        <div className={styles.text}>
          <h1>About Us</h1>
          <h2>Home    <span> / About Us</span></h2>
         </div>
      </div>
     
       <Subscribe />
      <Footerlast /> 
    </div>
  );
};

export default About;
