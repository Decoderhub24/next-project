import React from "react";
import Navbar from '@/app/components/navbar';
import Footerlast from '@/app/components/footerlast';
import PathSection from "../pathSection";
import ChallangeSection from "../challangeSection";
import styles from '../application.module.scss';
import appSoft from '@/app/styles/applicationSoft.module.scss';

const ApplicationSoft = () => {
  return (
    <div>
      <Navbar />
      <PathSection pageName="Application Software" />
      <div className={styles.main}>
  {/* Left Side - Image and Text */}
  <div className={styles.topSection}>
    <div className={styles.imagecontainer}>
      <img src="https://hitechnepal.com/images/discussing-mobile-app.jpg" alt="Left Image" className={styles.imageCard} />
    </div>
<div className={styles.textContainer}>
    <h2 className={styles.header}>
      <img src="https://hitechnepal.com/images/icons/001-3d-modeling.svg" alt="" className={styles.icon} /> Application Software
    </h2>
    <p>We have fully customized solutions for all types Application Software and for all types of businesses and industries like Trading, Wholesaler, Distributors, Retails, Offices, Restaurants, Hospitals, Schools, Logistics, Hotel, Facotory, Farms and many more.</p>
    <br /><p>All of our Application Softwares are designed to perform specific tasks like Accounting, Inventory, Billing, Multi Location Management, POS, Payroll etc.</p>
    </div>
   
  </div>

  {/* Right Side - Header with Icon and Image */}
  <div className={styles.buttomSection}>
  <div className={styles.btntext}>
  <p className={styles.text}>Our Apllication softwares can also be accessed in Cloud online from anywhere, anytime and anydevice. Contact us to know more about our Application Softwares and how we can help to make your business processes online and aumated.</p>
  </div>
  <div className={styles.btnimage}>
    <img src="https://hitechnepal.com/images/6661.svg" alt="Right Image" className={styles.rightImage} />
    </div>
  </div>
</div>


      
      <ChallangeSection />
      <Footerlast />
    </div>
  );
};

export default ApplicationSoft;
