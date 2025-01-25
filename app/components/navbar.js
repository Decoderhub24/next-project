import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>HiTech</h1>
        <p className={styles.subtitle}>Solutions & Services Pvt. Ltd.</p>
        <span className={styles.tagline}>
          Next Generation Solution for Hitech Business
        </span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Link href="/" passHref>
            <li className={styles.navItem}>Home</li>
          </Link>
          <Link href="/about" passHref>
            <li className={styles.navItem}>About Us</li>
          </Link>
          <Link href="/products" passHref>
            <li className={styles.navItem}>
              Products <span className={styles.downArrow}>▼</span>
            </li>
          </Link>
          <Link href="/services" passHref>
            <li className={styles.navItem}>
              Services <span className={styles.downArrow}>▼</span>
            </li>
          </Link>
          <Link href="/hospitality" passHref>
            <li className={styles.navItem}>
              Hospitality Solutions <span className={styles.downArrow}>▼</span>
            </li>
          </Link>
          <Link href="/ourclients" passHref>
            <li className={styles.navItem}>Our Clients</li>
          </Link>
          <Link href="/career" passHref>
            <li className={styles.navItem}>Career</li>
          </Link>
          <Link href="/contact" passHref>
            <li className={styles.navItem}>Contact Us</li>
          </Link>
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
