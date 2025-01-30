import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from '@/app/components/navbar';
import Footerlast from '@/app/components/footerlast';
import styles from '../styles/contact.module.scss';

const contactData = [
    {
      title: "Call Us",
      details: ["01-5389641, 01-5389642", "01-5389643, 01-5389644"],
      icon: "https://hitechnepal.com/images/icons/003-phone-receiver.svg", 
    },
    {
      title: "Main Office",
      details: ["4th floor, Divine Complex", "Kalimati, Kathmandu"],
      icon: "https://hitechnepal.com/images/icons/002-location.svg",
    },
    {
      title: "Our Branches",
      button: "See All",
      icon: "https://hitechnepal.com/images/icons/001-office.svg",
    },
    {
      title: "Mail Us",
      details: ["info@hitechnepal.com.np", "support@hitechnepal.com.np"],
      icon: "https://hitechnepal.com/images/icons/001-letter.svg",
    },
  ];
const ContactUS = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutpage}>
      <div className={styles.imagesection}></div>
      <div className={styles.text}>
        <h1>Contact Us</h1>
        <h2>
         <b>Home </b> <span>    /  Contact Us</span>
        </h2>
      </div>
    </div>

    <div className={styles.container}>
      {contactData.map((item, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.details}>
            {item.details?.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          {item.button && (
            <button className={styles.button}>{item.button}</button>
          )}
          <div>
            <img src={item.icon} alt={item.title} className={styles.icon} />
          </div>
        </div>
      ))}
    </div>


    {/* Location Map Section */}
    <div className={styles.mapContainer}>
       
        <div className={styles.map}>
          {/* Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6184905337554!2d85.29825595069669!3d27.698183982711267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185bd20b442d%3A0x55d9d99486fef1fe!2sHiTech%20Solutions%20%26%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1594150562956!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          />
        </div>
      </div>


      <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Get In Touch</h2>
      <form className={styles.contactForm}>
        <div className={styles.contactGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Enter your mobile number" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="company">Company</label>
            <input type="text" id="company" placeholder="Enter your company name" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="inquiry">Inquiry For</label>
            <select id="inquiry" className={styles.selectField} required>
              <option value="">-- Select Inquiry Subject --</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
            </select>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message" className={styles.textArea} required></textarea>
        </div>
        <div className={styles.errorMessage}>
          ERROR for site owner: Invalid domain for site key
        </div>
        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
    </div>

      
      <Footerlast />
    </div>
  );
};

export default ContactUS;
