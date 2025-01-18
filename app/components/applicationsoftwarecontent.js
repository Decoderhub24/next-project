// In your ERPContent.js (or ERPContent.jsx)
import styles from '../styles/ERPcontent.module.css';  



export default function ERPContent() {
  return (
    <div className={styles['erp-content-container']}>
      <div className={styles['erp-content']}>
        <div className={styles['erp-image']}>
          <img src="https://hitechnepal.com/images/application-software-icon.png" alt="ERP System" className={styles['image']} />
        </div>
        <div className={styles['erp-text']}>
          <h2>Application Software </h2>
          <p>We offer fully customized solutions for all types of businesses and industries. Be it Trading, Wholesaler, Distributors, Retails, Offices, Hotel and Restaurants, Hospitals, Education, Logistics, Factories, Farms and many more, Hitech offers the right solution based on your necessity.</p>

<p>Our versatile Application Software is designed to perform complex tasks such as accounting, inventory, billing, multi-location management, Point of Sale, Payroll and human resources etc.</p>

<p>Now, you can carry your business in your pocket and have access from anywhere and anytime.</p>
<p>Watch how your business is performing from any devices through our cloud solution.

</p>
          <button className={styles['read-more-btn']}>Read More</button>
        </div>
      </div>
    </div>
  );
}
