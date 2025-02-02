import React from "react";
import Navbar from '@/app/components/navbar';
import Footerlast from '@/app/components/footerlast';
import imgstyles from "../../styles/pathSection.module.scss"
import ChallangeSection from "../challangeSection";
import styles from '../application.module.scss';
import appSoft from '@/app/styles/applicationSoft.module.scss';

const ApplicationSoft = () => {
  return (
    <div>
      <Navbar />
      <div className={imgstyles.aboutpage}>
      <div className={imgstyles.ecommerceimagesection}></div>
      <div className={imgstyles.text}>
        <h1 >E-Commerce</h1>
        <h2 >
         <b>Home </b> <span>  /  Services  /  E-Commerce</span>
        </h2>
      </div>
    </div>
      <div className={styles.main}>
  {/* Left Side - Image and Text */}
  <div className={styles.topSection}>
    <div className={styles.imagecontainer}>
      <div className={styles.imageCard}>
      <img src="https://hitechnepal.com/images/laptop-technology-ipad-tablet-35550.jpg" alt="Left Image" />
      </div>
    </div>
<div className={styles.textContainer}>
    <h2 className={styles.header}>
      <img src="https://hitechnepal.com/images/icons/002-shopping-bag.svg" alt="" className={styles.icon} /> E-commerce
    </h2>
    <p>E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet.We provide customized B2B and B2C, E-commerce solutions for all types of businesses.</p><br />
   
    </div>
   
  </div>

  {/* Right Side - Header with Icon and Image */}
  <div className={styles.buttomSection}>
  <div className={styles.btntext}>
  <p className={styles.text}>Our dedicated team of E-commerce Development will plan and build the E-commerce systems as per your requirements and within your budget. We have a complete E-commerce Solutions for Department Stores, Retails, or anyone who is looking for an user-friendly and flexible e-commerce website.</p>
  </div>
  <div className={styles.btnimage}>
    <img src="https://hitechnepal.com/images/ecommerce-infographic.png" alt="Right Image" className={styles.rightImage} />
    </div>
  </div>
</div>


      
      <ChallangeSection />
      <Footerlast />
    </div>
  );
};

export default ApplicationSoft;
