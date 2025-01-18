'use client';

import { useState } from 'react';
import ERPContent from './erpcontent';
import ApplicationSoftwareContent from './applicationsoftwarecontent';
import CustomizedSoftwareDevelopmentContent from './softwaredevelopmentcontent';
import EcommerceContent from './ecommercecontent';
import styles from '../styles/Home.module.scss';

export default function TabSection() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  // Data for tabs with images, labels, and numbers
  const tabs = [
    { id: 1, label: 'ERP', image: 'https://hitechnepal.com/images/icons/001-3d-modeling.svg', number: '01' },
    { id: 2, label: 'Application Software', image: 'https://hitechnepal.com/images/icons/001-application.svg', number: '02' },
    { id: 3, label: 'Customized Software Development', image: 'https://hitechnepal.com/images/icons/001-computer.svg',number: '03' },
    { id: 4, label: 'E-commerce', image: 'https://hitechnepal.com/images/icons/002-shopping-bag.svg', number: '04' },
  ];

  // Dynamically render the content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 1:
        return <ERPContent />;
      case 2:
        return <ApplicationSoftwareContent />;
      case 3:
        return <CustomizedSoftwareDevelopmentContent />;
      case 4:
        return <EcommerceContent />;
      default:
        return <ERPContent />;
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className={styles.container}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${selectedTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <p className={`${styles.tabNumber} ${selectedTab === tab.id ? styles.activeLabel : ''}`}
            >
              {tab.number}</p>
            <img
              src={tab.image}
              alt={tab.label}
              className={styles.tabImage}
            />
            <p
              className={`${styles.tabLabel} ${selectedTab === tab.id ? styles.activeLabel : ''}`}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>

      {/* Render Content */}
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}
