import React from "react";
import styles from "../styles/footer.module.css";


const FooterSection = () => {
  return (
    <div className={styles.FooterSection}>
      <div className={styles.footerSectionContainer}>
        {/* Header with Border */}
        <h2 className={styles.footerHeader}>
            Authorized Product Partner
        </h2>
        

        {/* Logos with Direct Links */}
        <div className={styles.logoContainer}>
          <a href="https://hitechnepal.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://hitechnepal.com/images/partners/ezee-logo.png"
              alt="hotel management software"
              className={styles.logoImage}
            />
          </a>
          <a href="https://hitechnepal.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://hitechnepal.com/images/partners/beatriute-logo.png"
              alt="crm and sfa"
              className={styles.logoImage2}
            />
          </a>
          <a href="https://hitechnepal.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://hitechnepal.com/images/partners/bhoomi-logo.png"
              alt="bhoomi"
              className={styles.logoImage}
            />
          </a>
        </div>
      </div>

      <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.section} style={{ backgroundImage: "url('https://hitechnepal.com/images/photograph-of-men-having-conversation-seating-on-chair-1015568.jpg')",opacity: "0.8" }}>
        <div className={styles.content}>
        <img
    src="https://hitechnepal.com/images/icons/001-idea.svg"
    alt="Idea Icon"
    className={styles.icon}
  />
          <h2>Have a project in mind?</h2>
          <h1>Let's get to work.</h1>
          <p>Find out how it works and ask any questions you may have.</p>
          <a href="#" className={styles.link}>
            GET IN TOUCH →
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.section} style={{ backgroundImage: "url('https://hitechnepal.com/images/channel-partner.jpg')", opacity: "0.7" }}>
        <div className={styles.content2}>
        <img
    src="https://hitechnepal.com/images/icons/002-handshake.svg"
    alt="Idea Icon"
    className={styles.icon}
  />
  
          <h2>Want to work with us?</h2>
          <h1>Become a channel partner.</h1>
          <p>Be a part of the No 1 Business Solutions Provider in Nepal and share opportunities with us.</p>
          <a href="#" className={styles.link}>
            LEARN MORE →
          </a>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default FooterSection;
