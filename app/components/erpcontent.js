// In your ERPContent.js (or ERPContent.jsx)
import styles from '../styles/ERPcontent.module.css';  



export default function ERPContent() {
  return (
    <div className={styles['erp-content-container']}>
      <div className={styles['erp-content']}>
        <div className={styles['erp-image']}>
          <img src="https://hitechnepal.com/images/erp-infograph.png" alt="ERP System" className={styles['image']} />
        </div>
        <div className={styles['erp-text']}>
          <h2>ERP </h2>
          <p>Enterprise resource planning (ERP) is an integrated management of core business processes, often in real time and mediated by software and technology.

Hitech IMS is a modular Cloud based ERP software with multi-branch and complete Enterprise Solution management.

Track and manage your business through our ERP solution where you can easily manage your raw materials, productions, administration, finances and accounts, purchases and imports, sales and budget, customer care and reporting.

</p>
          <button className={styles['read-more-btn']}>Read More</button>
        </div>
      </div>
    </div>
  );
}
