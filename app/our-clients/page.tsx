import React from "react";
import Navbar from "../components/navbar"; 
import Footerlast from '../components/footerlast';
import styles from "../styles/Ourclients.module.scss"; 

const clients = [
  { logo: "https://hitechnepal.com/images/logo/chaudhary-group.png", name: "Company One" },
  { logo: "https://hitechnepal.com/images/logo/triveni-logo.svg", name: "Company Two" },
  { logo: "https://hitechnepal.com/images/logo/MCGroup-logo.jpg", name: "Company Three" },
  { logo: "https://hitechnepal.com/images/logo/sarawagi-group.png", name: "Company Four" },
  { logo: "https://hitechnepal.com/images/logo/maruka-organization.png", name: "Company Five" },
  { logo: "https://hitechnepal.com/images/logo/maruka-organization.png", name: "Company Six" },
  { logo: "https://hitechnepal.com/images/logo/jagdamba-group.png", name: "Company Seven" },
  { logo: "https://hitechnepal.com/images/logo/jagdamba-group.png", name: "Company Eight" },
  { logo: "https://hitechnepal.com/images/logo/chaudhary-group.png", name: "Company One" },
  { logo: "https://hitechnepal.com/images/logo/triveni-logo.svg", name: "Company Two" },
  { logo: "https://hitechnepal.com/images/logo/MCGroup-logo.jpg", name: "Company Three" },
  { logo: "https://hitechnepal.com/images/logo/sarawagi-group.png", name: "Company Four" },
  { logo: "https://hitechnepal.com/images/logo/maruka-organization.png", name: "Company Five" },
  { logo: "https://hitechnepal.com/images/logo/maruka-organization.png", name: "Company Six" },
  { logo: "https://hitechnepal.com/images/logo/jagdamba-group.png", name: "Company Seven" },
  { logo: "https://hitechnepal.com/images/logo/jagdamba-group.png", name: "Company Eight" },

];

export default function OurClientsPage() {
  return (
    <>
      <Navbar />
      <div className={styles.clientpage}>
        <div className={styles.imagesection}></div>
        <div className={styles.text}>
          <h1>Clients</h1>
          <h2>
            Home <span> / Clients</span>
          </h2>
        </div>
      </div>
      <div className={styles.ourClientsSection}>
        <h1 className={styles.heading}>Few of Our Valuable Clients are:</h1>
        <div className={styles.clientGrid}>
          {clients.map((client, index) => (
            <div className={styles.clientCard} key={index}>
              <img
                src={client.logo}
                alt={client.name}
                className={styles.clientLogo}
              />
              <p className={styles.clientName}>{client.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.clientbtn}><a href="#">500+CLIENTS</a></div>
      </div>
      <Footerlast/>
    </>
  );
}
