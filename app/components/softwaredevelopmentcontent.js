// In your ERPContent.js (or ERPContent.jsx)
import styles from '../styles/ERPcontent.module.css';  



export default function ERPContent() {
  return (
    <div className={styles['erp-content-container']}>
      <div className={styles['erp-content']}>
        <div className={styles['erp-image']}>
          <img src="https://hitechnepal.com/images/illustrate-software.png" alt="ERP System" className={styles['image']} />
        </div>
        <div className={styles['erp-text']}>
          <h2>Customized Software Development </h2>
          <p> HiTech Solutions and Services has the ability and resources for contract projects or collaborative development efforts. You think and we make it happen.</p>

<p>We specialize in developing technically advanced solutions with a focus on Internet-enabled and client-server applications. We have extensive experience in multiple</p>
<p>platforms such as ASP, VB, Java, C, C++ and other Windows application development and favor taking an object-oriented and modular design approach.</p>
          <button className={styles['read-more-btn']}>Read More</button>
          <button className={styles['contact-btn']}>Contact US</button>
        </div>
      </div>
    </div>
  );
}
