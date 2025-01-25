"use client";  // Mark this as a client-side component

import { useState } from "react";
import styles from "../styles/subscribe.module.scss"
export default function SubscribePage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      // Implement your subscription logic here
      console.log(`Subscribed with: ${email}`);
      alert("Subscribed successfully!");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Left Side: Image and Text */}
      <div className={styles.leftSide}>
        <img
          src="https://hitechnepal.com/images/icons/newsletter.svg" // Replace with your image URL
          alt="Subscribe Image"
          className={styles.image}
        />
        <p className={styles.text}>Subscribe To Our</p>
        <p className={styles.newsletter}> 
            
            Newsletter</p>
        
      </div>

      {/* Right Side: Email Subscription Form */}
      <div className={styles.rightSide}>
        
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
        />
        <button onClick={handleSubscribe} className={styles.subscribeButton}>Subscribe Now</button>
      </div>
    </div>
  );
}
