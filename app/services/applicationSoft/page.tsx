import React from "react";
import Navbar from '@/app/components/navbar';
import Footerlast from '@/app/components/footerlast';
import PathSection from "../pathSection";
import ChallangeSection from "../challangeSection";
import styles from '../styles/About.module.scss';
import appSoft from '@/app/styles/applicationSoft.module.scss';

const ApplicationSoft = () => {
  return (
    <div>
      <Navbar />
      <PathSection pageName="Application Software" />
        <div className={appSoft.main}>
          <div className={appSoft.imageContainer}>
               <div className={appSoft.card}></div>
               <img src="#" alt="Image Card" className={appSoft.imageCard}></img>
            </div>
        </div>

      
      <ChallangeSection />
      <Footerlast />
    </div>
  );
};

export default ApplicationSoft;
