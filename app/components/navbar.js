"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";



function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showHospitalityDropdown, setShowHospitalityDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };
  const toggleDropdown = (menu) => {
    setShowProductsDropdown(showProductsDropdown === menu ? null : menu);
    setShowServicesDropdown(showServicesDropdown === menu ? null : menu);
    setShowHospitalityDropdown(showHospitalityDropdown === menu ? null : menu);

  };
  

  return (

    
    <header className={styles.header}>
      
      <div className={styles.logoContainer}>
      <Link href="/" passHref>
        <img
          src="https://hitechnepal.com/images/logo.png"
          alt="HiTech Logo"
          className={styles.logoImage}
        />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" passHref>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" passHref>About Us</Link>
          </li>
          <li className={styles.navItem}
    onMouseEnter={() => setShowProductsDropdown(true)}
    onMouseLeave={() => setShowProductsDropdown(false)}
>
  <Link href="/products/ims-hitech-erp" passHref>
    Products <FontAwesomeIcon icon={faAngleDown} className={styles.downArrow} />
  </Link>
  
  {showProductsDropdown && (
    <div 
      style={{
        position: "absolute",
        left: 0,
        top: "100%",
        background: "white",
        display: "flex",
       
        border: "1px solid #ddd",
       
       
        width:"550px"
      }}
    >
      <ul className={styles.dropdownMenu}
        style={{
          display: "flex",
          gap: "40px",
          width:"100%"  
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link href="/products/ims-hitech-erp" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/007-hospital.svg"
          className={styles.producticon}
        /> 
          <li > IMS - Hitech ERP</li></Link>
          <hr />
          <Link href="/products/my-swostik-online" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/001-accounting.svg"
          className={styles.producticon}
        /> <li>My Swastik Online - Cloud Accounting</li></Link>
          <hr />
          <Link href="/products/accounting-software" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/006-restaurant.svg"
          className={styles.producticon}
        /> 
          <li >Swastik Bisiness Accounting Software</li></Link>
          <hr />
          <Link href="/products/pharmasoft" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/008-clerk.svg"
          className={styles.producticon}
        /> 
           <li>Pharmasoft</li></Link>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href="/products/swostik-resturant" style={{ display: "flex"}}>
        <img
          src="https://hitechnepal.com/images/prodicon/business-accounting.svg"
          className={styles.producticon}
        />
          <li >Swastik Resturant ERP</li></Link>
          <hr />
          <Link href="/products/swostik-pos" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/007-hospital.svg"
          className={styles.producticon}
        /> <li>Swastik POS</li></Link>
          <hr></hr>
          <Link href="/products/avocare" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/004-vitamin.svg"
          className={styles.producticon}
        /> <li >Avocare - Hospital Management Solution</li></Link>
          <hr />
          <Link href="/products/gurukul" style={{ display: "flex"}}>
          <img
          src="https://hitechnepal.com/images/product-icons/005-school.svg"
          className={styles.producticon}
        /> <li>Gurukul - Hitech School Management Software</li></Link>
        </div>
      </ul>
    </div>
  )}
</li>

          <li
            className={styles.navItem}
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link href="/services/applicationSoft" passHref>
              Services <FontAwesomeIcon icon={faAngleDown} className={styles.downArrow} />
            </Link>
            {showServicesDropdown && (
              <ul className={styles.dropdownMenu}>
                <Link href="/services/applicationSoft"><li>Application Software</li></Link>
                <hr></hr>
                <Link href="/services/ERP"><li>ERP </li></Link>
                <hr></hr>
                <Link href="/services/customized"><li>Customized Software</li></Link>
                <hr></hr>
                <Link href="/services/Ecommerce"><li>E-Commerce</li></Link>
                <hr></hr>
              </ul>
            )}
          </li>

          <li className={styles.navItem}
    onMouseEnter={() => setShowHospitalityDropdown(true)}
    onMouseLeave={() => setShowHospitalityDropdown(false)}
>
  <Link href="/hospitality/hotel-management-system" passHref>
    Hospitality Solutions <FontAwesomeIcon icon={faAngleDown} className={styles.downArrow} />
  </Link>
  
  {showHospitalityDropdown && (
    <div 
      style={{
        position: "absolute",
        left: 0,
        top: "100%",
        background: "white",
        display: "flex",
       
        border: "1px solid #ddd",
        
        width:"550px"
      }}
    >
      <ul className={styles.dropdownMenu}
        style={{
          display: "flex",
          gap: "40px",
          width:"100%"  
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link href="/hospitality/hotel-management-system"><li >eZee FrontDesk-Hotel Management System</li></Link>
          <hr />
          <Link href="/hospitality/hotel-booking"><li>eZee Absolute - Hotel Booking software</li></Link>
          <hr />
          <Link href="/hospitality/channel-manager"><li >eZee Centrix - Channel Manager</li></Link>
          <hr />
          <Link href="/hospitality/feedback-system"><li>eZee iFeedback - Feedback system</li></Link>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link href="/hospitality/resturant-software"><li >eZee BurrO! - Resturant Software</li></Link>
          <hr />
          <Link href="/hospitality/booking-engine"><li>eZee Reservation - Booking Engine</li></Link>
          <hr></hr>
          <Link href="/hospitality/resturant-menu"><li >eZee iMenu - Resturant Menu Software</li></Link>
          <hr />
          <Link href="/hospitality/mobile-app"><li>Appytect - Mobile App Builder</li></Link>
        </div>
      </ul>
    </div>
  )}
</li>


          <li className={styles.navItem}>
            <Link href="/our-clients" passHref>Our Clients</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/career" passHref>Career</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" passHref>Contact Us</Link>
          </li>
        </ul>
        <button className={styles.ticketButton}>Open a Ticket</button>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <span><HiBars3BottomRight />          </span>
        </div>
      </nav>

       {/* Overlay */}
       {isSidebarVisible && (
        <div className={styles.overlay} onClick={closeSidebar} />
      )}

       {/* Sidebar */}
       <div className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : ''}`}>
        <div className={styles.sidebarHeader}>
          <button className={styles.closeButton} onClick={toggleSidebar}>
            <span>✕</span>
          </button>
        </div>

        <div className={styles.logoContainers}>
        <img
          src="https://hitechnepal.com/images/logo.png"
          alt="HiTech Logo"
          className={styles.logoImages}
        />
       </div>
        
       <ul className={styles.sidebarNav}>
       <li><Link href="/" className={styles.flexLink}>Home</Link></li>
       <li><Link href="/about" className={styles.flexLink}>About Us</Link></li>
       {/* Products Dropdown */}
       <li>
       <Link href="">
          <span className={styles.flexLink} >
            Products <RiArrowDropDownLine className={styles.dropdownIcon } onClick={() => toggleDropdown("products")}/>
          </span>
          {showProductsDropdown=== "products" && (
            <ul className={styles.submenu}>
          <li > <Link href="/products/ims-hitech-erp">IMS - Hitech ERP</Link></li>
          <li><Link href="/products/my-swostik-online">My Swastik Online - Cloud Accounting</Link></li>
          <li > <Link href="/products/accounting-software">Swastik Bisiness Accounting Software</Link></li>
           <li> <Link href="/products/pharmasoft">Pharmasoft</Link></li>
          <li ><Link href="/products/swastik-resturant">Swastik Resturant ERP</Link></li>
          <li><Link href="/products/swostik-pos">Swostik POS</Link></li>
           <li > <Link href="/products/avocare">Avocare - Hospital Management Solution</Link></li>
         <li> <Link href="/products/gurukul">Gurukul - Hitech School Management Software</Link></li>
            </ul>
          
          )}
          </Link>
        </li>
  <li>
    <Link href="">
      <span className={styles.flexLink}>
        Services <RiArrowDropDownLine className={styles.dropdownIcon} onClick={() => toggleDropdown("services")}/>
      </span>
      {showServicesDropdown=== "services" && (
            <ul className={styles.submenu}>
          <Link href="/services/applicationSoft"><li>Application Software</li></Link>
                <Link href="/services/ERP"><li>ERP </li></Link>
                <Link href="/services/customized"><li>Customized Software</li></Link>
                <Link href="/services/Ecommerce"><li>E-Commerce</li></Link>
                
            </ul>
          
          )}
    </Link>
  </li>
  <li>
    <Link href="">
      <span className={styles.flexLink}>
        Hospitality Solutions <RiArrowDropDownLine className={styles.dropdownIcon} onClick={() => toggleDropdown("hospitality")} />
      </span>
      {showHospitalityDropdown=== "hospitality" && (
            <ul className={styles.submenu}>
         <li > <Link href="/hospitality/hotel-management-system">eZee FrontDesk-Hotel Management System</Link></li>

          <li><Link href="/hospitality/hotel-booking">eZee Absolute - Hotel Booking software</Link></li>

          <li ><Link href="/hospitality/channel-manager">eZee Centrix - Channel Manager</Link></li>

          <li><Link href="/hospitality/feedback-system">eZee iFeedback - Feedback system</Link></li>
        
          <li ><Link href="/hospitality/resturant-software">eZee BurrO! - Resturant Software</Link></li>

          <li><Link href="/hospitality/booking-engine">eZee Reservation - Booking Engine</Link></li>
      
         <li > <Link href="/hospitality/resturant-menu">eZee iMenu - Resturant Menu Software</Link></li>

          <li><Link href="/hospitality/mobile-app">Appytect - Mobile App Builder</Link></li>
            </ul>
          
          )}
    </Link>
  </li>
  <li ><Link href="/our-clients" className={styles.flexLink}>Our Clients</Link></li>
  <li><Link href="/career" className={styles.flexLink}>Career</Link></li>
  <li><Link href="/contact" className={styles.flexLink}>Contact Us</Link></li>
  <li>
  <button className={styles.SideticketButton}>Open a Ticket</button>
  </li>
</ul>
<div className={styles.sideContact}>
<span className={styles.spn}><FaPhoneAlt className={styles.pmIcon}/>+977 9803601598</span>
<span className={styles.spn}><MdMail className={styles.pmIcon} /> info@hitechnepal.com.np </span>
<div className={styles.socialIcon}>
  <a href="#" className={styles.sIcon}><FaFacebookF className={styles.sI}/></a>
  <a href="#" className={styles.sIcon}><FaWhatsapp className={styles.sI}/></a>
  <a href="#" className={styles.sIcon}><FaViber className={styles.sI}/>  </a>
</div>
</div>
      </div>

      
    </header>
  );
}

export default Navbar;

