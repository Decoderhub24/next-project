"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showHospitalityDropdown, setShowHospitalityDropdown] = useState(false);

  return (

    
    <header className={styles.header}>
      
      <div className={styles.logoContainer}>
        <img
          src="https://hitechnepal.com/images/logo.png"
          alt="HiTech Logo"
          className={styles.logoImage}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" passHref>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" passHref>About Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products" passHref>
              Products <FontAwesomeIcon icon={faAngleDown} className={styles.downArrow} />
            </Link>
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
                <Link href="/services/customizedSoft"><li>Customized Software</li></Link>
                <hr></hr>
                <Link href="/services/eCommerce"><li>E-Commerce</li></Link>
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
        padding: "10px",
        border: "1px solid #ddd",
       
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
          <Link href=""><li >eZee FrontDesk-Hotel Management System</li></Link>
          <hr />
          <Link href=""><li>eZee Absolute - Hotel Booking software</li></Link>
          <hr />
          <Link href=""><li >eZee Centrix - Channel Manager</li></Link>
          <hr />
          <Link href=""><li>eZee iFeedback - Feedback system</li></Link>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link href=""><li >eZee BurrO! - Resturant Software</li></Link>
          <hr />
          <Link href=""><li>eZee Reservation - Booking Engine</li></Link>
          <hr></hr>
          <Link href=""><li >eZee iMenu - Resturant Menu Software</li></Link>
          <hr />
          <Link href=""><li>Appytect - Mobile App Builder</li></Link>
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
        <div className={styles.menuIcon}>
          <span>☰</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

