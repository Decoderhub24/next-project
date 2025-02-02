import React from "react";
import Navbar from '@/app/components/navbar';
import Footerlast from '@/app/components/footerlast';
import imgstyles from "../../styles/pathSection.module.scss";
import ChallangeSection from "../challangeSection";
import styles from '../application.module.scss';
import { FaCheck } from "react-icons/fa"; 


const ApplicationSoft = () => {
    const expertiseData = [
        { id: 1, title: "Information Systems", checked: "darkBlue" },
        { id: 2, title: "Client-Server Technologies", checked: "lightBlue" },
        { id: 3, title: "Database Design, Maintenance and Administration", checked: "black" },
        { id: 4, title: "Data Modeling and Visualization Techniques", checked: "lightBlue" },
        { id: 5, title: "Internet-based Technologies", checked: "darkBlue" },
        { id: 6, title: "Online and Offline Reporting", checked: "black" },
        { id: 7, title: "System Integration and Testing", checked: "darkBlue" },
        { id: 8, title: "Parallel & Distributed Computing", checked: "lightBlue" },
        { id: 9, title: "Internet & Network Security", checked: "black" },
        { id: 10, title: "Networking", checked: "lightBlue" },
      ];
  return (
    <div>
      <Navbar />
      <div className={imgstyles.aboutpage}>
      <div className={imgstyles.customizeimagesection}></div>
      <div className={imgstyles.text}>
        <h1 >Customized Software</h1>
        <h2 >
         <b>Home </b> <span>  /  Services  /  Customized Software</span>
        </h2>
      </div>
    </div><div className={styles.main}>
  {/* Left Side - Image and Text */}
  <div className={styles.topSection}>
    <div className={styles.imagecontainer}>
      <img src="https://hitechnepal.com/images/proxyclick-visitor-management-system-wsHvGRpT8Eo-unsplash.jpg" alt="Left Image" className={styles.imageCard} />
    </div>
<div className={styles.textContainer}>
    <h2 className={styles.header}>
      <img src="https://hitechnepal.com/images/icons/001-3d-modeling.svg" alt="" className={styles.icon} /> Software Development
    </h2>
    <p>HiTech Solutions and Services has expertise and resources for contract projects or collaborative development efforts.</p>
    <br /><p>We specialize in developing technically advanced solutions with focus on Internet-enabled and client-server applications. We have extensive experience in ASP, VB, Java, C, C++ and other Windows application development and favor taking a object-oriented and modular design approach.</p>
    <br /><p>We have a talented software resource pool comprising of engineers and people having MCSD, MCSE, MCP, OCP etc.</p>
    </div>
   
  </div>

  {/* Right Side - Header with Icon and Image */}
  <div className={styles.buttomSection}>
  <div className={styles.btntext}>
  <p className={styles.text}>The strength of our team is indicated by their impressive technical backgrounds in fields such as intelligent information processing systems, image processing, artificial intelligence and networking. This is further underlined by years of experience developing commercial applications under contract.</p><br />
  <p className={styles.text}>HiTech Solutions and Services offers services of their trained consultants for on-site software development and consultancy requirements at respective client locations.</p>
  <br />
  <p className={styles.text}>HiTech Solutions and Services enjoys a rich tradition of quality work in Client Server and Internet based technologies, Online Reporting etc.</p>
  
  </div>
  <div className={styles.btnimage}>
    <img src="https://hitechnepal.com/images/6661.svg" alt="Right Image" className={styles.rightImage} />
    </div>
  </div>
</div>

<div className={styles.container}>
      <h2 className={styles.heading}>We Expertise In</h2>
      <div className={styles.grid}>
        {expertiseData.map((item) => (
          <div key={item.id} className={styles.card}>
          <FaCheck className={`${styles.checkIcon} ${styles[item.checked]}`} />
            <p className={styles.text}>{item.title}</p>
            <span className={styles.number}>{item.id < 10 ? `0${item.id}` : item.id}</span>
          </div>
        ))}
      </div>
    </div>


      
      <ChallangeSection />
      <Footerlast />
    </div>
  );
};

export default ApplicationSoft;
