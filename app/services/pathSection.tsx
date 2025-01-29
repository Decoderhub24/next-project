import React from "react";
import styles from "../styles/pathSection.module.scss";

const PathSection = ({ pageName }: { pageName: string }) => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.imagesection}></div>
      <div className={styles.text}>
        <h1>{pageName}</h1>
        <h2>
         <b>Home </b> <span>  /  Services  /  {pageName}</span>
        </h2>
      </div>
    </div>
  );
};

export default PathSection;
