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
      <div className={imgstyles.imagesection}></div>
      <div className={imgstyles.text}>
        <h1 >ERP</h1>
        <h2 >
         <b>Home </b> <span>  /  Services  /  ERP</span>
        </h2>
      </div>
    </div>
      <div className={styles.main}>
  {/* Left Side - Image and Text */}
  <div className={styles.topSection}>
    <div className={styles.imagecontainer}>
      <div className={styles.imageCard}>
      <img src="https://hitechnepal.com/images/gray-high-rise-buildings-936722.jpg" alt="Left Image" />
      </div>
    </div>
<div className={styles.textContainer}>
    <h2 className={styles.header}>
      <img src="https://hitechnepal.com/images/icons/001-3d-modeling.svg" alt="" className={styles.icon} /> Enterprise resource planning
    </h2>
    <p>Enterprise resource planning (ERP) is the integrated management of main business processes, often in real time and mediated by software and technology.</p><br />
    <p>Hitech IMS ERP is a Cloud based, multi-module, multi-branch, and a complete Enterprise Solution management.</p>
   
    </div>
   
  </div>

  {/* Right Side - Header with Icon and Image */}
  <div className={styles.buttomSection}>
  <div className={styles.btntext}>
  <p className={styles.text}>It tracks and manages business raw materials, production administration, finances, accounts, purchases, imports, sales, budget, customer care and reporting.</p>
  </div>
  <div className={styles.btnimage}>
    <img src="https://hitechnepal.com/images/erp-infographic.png" alt="Right Image" className={styles.rightImage} />
    </div>
  </div>
</div>


      
      <ChallangeSection />
      <Footerlast />
    </div>
  );
};

export default ApplicationSoft;
