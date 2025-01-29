"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

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

          <li className={styles.navItem}>
            <Link href="/hospitality" passHref>
              Hospitality Solutions <FontAwesomeIcon icon={faAngleDown} className={styles.downArrow} />
            </Link>
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

