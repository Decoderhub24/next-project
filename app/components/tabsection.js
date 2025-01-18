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
        {[{ id: 1, label: 'ERP' }, { id: 2, label: 'Application Software' }, { id: 3, label: 'Customized Software Development' }, { id: 4, label: 'E-commerce' }].map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${selectedTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <h2 className={styles.tabNumber}>{`0${tab.id}`}</h2>
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
