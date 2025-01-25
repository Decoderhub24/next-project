import React from 'react';
import styles from '../styles/footerlast.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Footer Head Section */}
      <div className={styles.footerHead}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="https://hitechnepal.com/images/logo-wh.png" alt="HiTech Logo" />
        </div>

        {/* Contact */}
        <div className={styles.contact}>
         
          <p>
            <img src="https://hitechnepal.com/images/icons/001-call.svg" alt="Phone Icon" />
            01-5389641, 01-5389642 <br />
            01-5389643, 01-5389644
          </p>
        </div>

        {/* Location */}
        <div className={styles.location}>
         
          <p>
            <img src="https://hitechnepal.com/images/icons/002-gps.svg" alt="Location Icon" />
            4th floor, Divine Complex <br />
            Kalimati, Kathmandu
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>About</h3>
          <p>
            HiTech Solutions and Services Pvt. Ltd. is one of the premier
            business software solution providers in Nepal with its corporate
            office located at Kalimati, Kathmandu (Nepal).
          </p>
          <p>
            <a href="mailto:info@hitechnepal.com.np">info@hitechnepal.com.np</a><br />
            <a href="mailto:support@hitechnepal.com.np">support@hitechnepal.com.np</a>
            <br />
            Sales: +977-9803601598, 9802017029 <br />
            Support: +977-9802345048, 9802345049
          </p>
          <div className={styles.social}>
            <a href="#">F</a>
            <a href="#">I</a>
            <a href="#">W</a>
          </div>
        </div>

        <div className={styles.products}>
          <h3>Products</h3>
        <div>
        </div>
          <ul>
            <li>My Swastik Online - Cloud Accounting</li>
            <li>Swastik Restaurant ERP</li>
            <li>Avocare - Hospital Management Solution</li>
            
            <ul>
            <li>Swastik Business Accounting Software</li>
            <li>Swastik POS</li>
            <li>IMS - Hitech ERP</li>
            </ul>
          </ul>
        </div>

        <div className={styles.navigation}>
          <h3>Navigation</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Clients</li>
            <li>Contact Us</li>
            
          </ul>
          <ul>
          <li>Hospitality Solutions</li>
            <li>Career</li>
            <li>Open a ticket</li>
          </ul>
        </div>

        
      </div>
      <div className={styles.provinces}>
          <h3>Our Provincial Head</h3>
          <div className={styles.contact}>
            <p>Biratnagar <br />+977-9852047215</p>
            <p>Narayanghat <br />+977-9802071023</p>
            <p>Janakpur<br /> +977-9854020932</p>
            <p>Birgunj <br />+977-9855021911</p>
            <p>Pokhara <br />+977-9856020194</p>
            <p>Bhairahawa <br />+977-9857029489</p>
            <p>Mahendranagar <br />+977-9801005905</p>
            <p>Lahan <br />+977-9801005905</p>
            <p>Rautahat/Bara/Sarlahi <br />+977-9801005905</p>
            </div>
        </div>

      <div className={styles.bottom}>
        <p>2025 © Hitech Solutions & Services Pvt. Ltd. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
