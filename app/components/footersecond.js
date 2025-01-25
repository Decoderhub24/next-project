"use client";  // Mark this as a client-side component


import styles from '../styles/footersecond.module.scss';  // Import the correct CSS module for Home

export default function FooterSecond() {
  // Data for cards and clients
  const cards = [
    { id: 1, content: "The quality and services of Hitech is just awesome I am one of the satisfied clients of them. Their services after sales are just incredible.", author: "Vikash Singh", role: "Manager" },
    { id: 2, content: "We've been using Swastik Business Accounting since 8 years and have never been disappointed. Great software and great support", author: "Anil Lamichhane", role: "Sales Head" },
    { id: 3, content: "Swastik Business Accounting is a great software for accounting and inventory. I recommend it.", author: "Ganesh Khadka", role: "MD" }
  ];

  const clients = [
    "https://hitechnepal.com/images/clients/pashupati-paints.png", 
    "https://hitechnepal.com/images/clients/jagdamba-cement.png", 
    "https://hitechnepal.com/images/clients/shikhar.png",
    "https://hitechnepal.com/images/clients/tribeni.png", 
    "https://hitechnepal.com/images/clients/kathmandu-upatyaka.png", 
    "https://hitechnepal.com/images/clients/cg.jpg",
    "https://hitechnepal.com/images/clients/qfx.png", 
    "https://hitechnepal.com/images/clients/jagdamba-steel.png"
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>What Our Clients Say?</h1>
        <p>We are very fortunate to have formed excellent partnerships with our clients all over Nepal.</p>
      </header>

      {/* Cards Section */}
      <section>
        <div className={styles.cardsSection}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <p>{card.content}</p>
              <h1><strong>{card.author}</strong></h1>
              <h2>{card.role}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.clientsSection}>
        <h2>Few More Clients</h2>
        <div className={styles.clientImagesWrapper}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clientImage}>
              <img src={client} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
