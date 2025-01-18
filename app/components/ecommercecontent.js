// In your ERPContent.js (or ERPContent.jsx)
import styles from '../styles/ERPcontent.module.css';  



export default function ERPContent() {
  return (
    <div className={styles['erp-content-container']}>
      <div className={styles['erp-content']}>
        <div className={styles['erp-image']}>
          <img src="https://hitechnepal.com/images/ecommerce-infographic.png"  className={styles['image']} />
        </div>
        <div className={styles['erp-text']}>
          <h2>ERP </h2>
          <p>Worry not, Hitech offers both B2B and B2C eCommerce platform customized to fulfil your </p>
          <p>business needs. Our dedicated team of eCommerce will plan and execute the </p>
          <p>eCommerce system as per your requirements and within your budget. We have a </p>
          <p>complete eCommerce Solution for department stores, Retails, or anyone who is looking </p>
          <p>for a user friendly and flexible eCommerce website to take your business to the next level.</p>
          <button className={styles['read-more-btn']}>Read More</button>
        </div>
      </div>
    </div>
  );
}
