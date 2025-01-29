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
      
      <div className={appSoft.container}>
        {/* First Div */}
        <div className={`${appSoft.firstDiv} first-div`}>
          {/* First Inner Div - Blue Card with Background Image */}
          <div className={appSoft.blueCard}>
            <div className={appSoft.imageOverlay}></div> {/* Background Image in CSS */}
            <div className={appSoft.content}>
              <h2>Your Blue Card Title</h2>
              <p>This is some content inside the blue card.</p>
            </div>
          </div>

          {/* Aside Div - Application Service */}
          <div className={appSoft.aside}>
            <div className={`${appSoft.headingContainer} heading-container`}>
              <img
                src="https://hitechnepal.com/images/icons/001-3d-modeling.svg"
                alt="Logo"
                width={30}
                height={30}
              />
              <h2>Application Service</h2>
            </div>
            <p>
              This is some introductory text about the application service. It can
              provide insights or describe the features in a concise way.
            </p>
            <p>
              More details or additional information can go here to help users
              understand the service in greater depth.
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className={appSoft.secondDiv}>
          {/* Left Side Div - Paragraph */}
          <div className={appSoft.leftSide}>
            <p>
              This paragraph is on the left side of the second div. It should provide
              some content that is aligned with the left.
            </p>
          </div>

          {/* Right Side Div - Image Background */}
          <div className={appSoft.rightSide}>
            <div className={appSoft.image}></div> {/* Background Image in CSS */}
          </div>
        </div>
      </div>

      <ChallangeSection />
      <Footerlast />
    </div>
  );
};

export default ApplicationSoft;
