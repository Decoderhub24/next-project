// In your ERPContent.js (or ERPContent.jsx)
import styles from '../styles/ERPcontent.module.css';  
import erpImage from '../images/bg1.png';


export default function ERPContent() {
  return (
    <div className={styles['erp-content-container']}>
      <div className={styles['erp-content']}>
        <div className={styles['erp-image']}>
          <img src="./images/bg1.png" alt="ERP System" className={styles['image']} />
        </div>
        <div className={styles['erp-text']}>
          <h2>ERP System</h2>
          <p>ERP systems integrate core business processes into one unified system.</p>
          <button className={styles['read-more-btn']}>Read More</button>
        </div>
      </div>
    </div>
  );
}
