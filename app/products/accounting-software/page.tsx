"use client";
import { useRef, useEffect, useState } from "react";
import styles from "../ims-hitech-erp/ims-hitech-erp.module.scss"; // Import SCSS file
import swostikstyles from "../my-swostik-online/my-swostik-online.module.scss";
import Navbar from "@/app/components/navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaFilePowerpoint, FaCheck } from "react-icons/fa"; // Icons
import { HiArrowRight } from "react-icons/hi"; // Arrow Icon
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Subscribe from "../../components/subscribe";
import Footerlast from "../../components/footerlast";

export default function ImsHitechErp() {
  const features = [
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/drives-icon.png",
      title: "Manage your Books Anywhere",
      description:
        "By gaining access to the cloud, users can manage their books from anywhere. You can keep detailed information about your business, and all of it will be stored in a secure manner.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/30days-icon.png",
      title: "Collaborate with Branches and Teams",
      description:
        "We provide easy methods to collaborate with other teams. Users can easily communicate and update their data with various departments, teams, and branches.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/production-icon.png",
      title: "Fast, Reliable and Secured",
      description:
        "Rest assured that you will always have a fast and reliable connection with your data at all times. Never miss a beat and never worry about your data being viewed by unauthorized personnel.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/backup-icon.png",
      title: "Easily Track Your Inventory",
      description:
        "Keep detailed information about the items in your inventory. Users can track the order, shipment, and sale of all the items in their inventory.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/reporting-icon.png",
      title: "Easily Customize Reports and Documents",
      description:
        "In myswasiktonline.com, users get the option to customize reports and documents as per their needs. Access your information from the cloud and customize it easily.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/support-icon.png",
      title: "Sales and Accounts Receivable",
      description:
        "Most advanced billing systems, Credit Control Management, and sales analysis. Manage your customer better and increase your sales with the help of our latest solution.",
    },
  ];

  const versions = [
    { title: "New Features in Version 9" },
    { title: "New Features in Version 10" },
    { title: "New Features in Version 11" },
    { title: "New Features in Version 12" },
    { title: "New Features in Version 13" },
    { title: "New Features in Version 14" },
    { title: "New Features in Version 15" },
    { title: "New Features in Version 16" },
    { title: "New Features in Version 17" },
    { title: "New Features in Version 18" },
    { title: "New Features in Version 19" },
    { title: "New Features in Version 20" },
  ];

  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <>
      <Navbar />
      <div className={styles.pagecontainer}>
        {/* Overlay */}
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          {/* Left Side - Text */}
          <div className={styles.textcontainer}>
            <h1>Swastik Business Accounting Software</h1>
            <p>
              A complete automated system for Invoicing, Inventory Control and Accounting with Detailed Business performance Analysis. IRD CERTIFIED.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className={styles.imagecontainer}>
            <img
              src="https://hitechnepal.com/images/12.png"
              alt="IMS Hitech ERP"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Why this product */}
      <div className={swostikstyles.whyProductSection}>
        <h2>Why this product section</h2>
        <div className={swostikstyles.whyProductGrid}>
          {features.map((feature, index) => (
            <div key={index} className={swostikstyles.featureCard}>
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className={styles.featureImage}
              />
              <h3 className={swostikstyles.featureTitle}>{feature.title}</h3>
              <p className={swostikstyles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More About Us */}
      <div className={styles.learnMoreContainer}>
        <h2>Learn More About Us</h2>
        <div className={styles.buttonGroup}>
          <a href="/presentation.pdf" download className={styles.blueButton}>
            <FaFilePowerpoint className={styles.icon} />
            Download Presentation
          </a>
          <a href="/presentation.pdf" download className={styles.blueButton}>
            <FaFilePowerpoint className={styles.icon} />
            Download Presentation
          </a>
          <a href="/presentation.pdf" download className={styles.blueButton}>
            <FaFilePowerpoint className={styles.icon} />
            Download Presentation
          </a>
          <a href="/request-demo" className={styles.redButton}>
            <HiArrowRight className={styles.icon} />
            Request a Demo
          </a>
        </div>
      </div>

      {/* Solution for Different Industries */}
      <div className={styles.industrySolutions}>
        <h2>Solution for Different Industries</h2>
        <div className={styles.industryGrid}>
          {[
            {
              name: "Office",
              icon: "https://hitechnepal.com/images/product-icons/office.png",
            },
            {
              name: "Restaurant",
              icon: "https://hitechnepal.com/images/product-icons/restaurant.png",
            },
            // Add more industries here...
          ].map((industry, index) => (
            <div key={index} className={styles.industryContent}>
              <div className={styles.industryItem}>
                <img src={industry.icon} alt={industry.name} />
              </div>
              <p>{industry.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className={styles.keyFeatures}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          {[
            {
              title: "Administration and Security",
              features: [
                "Company Creation",
                "User Password",
                "Company Rights",
                "Data Import from another company",
              ],
            },
            {
              title: "Financial Module",
              features: [
                "Provisional Cash Bank / Journal Voucher Entry",
                "Ratio Analysis",
                "Negative Cash Requirement",
                "General Ledger Report",
              ],
            },
            // Add more features here...
          ].map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <h3>
                <FaCheck className={styles.checkIcon} />
                {feature.title}
              </h3>
              <ul>
                {feature.features.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <a href="/features" className={styles.viewAllButton}>
            View All Features
          </a>
        </div>
      </div>

      {/* Swastik Version Section */}
      <div className={swostikstyles.swastikSection}>
        <div className={swostikstyles.header}>
          <h2>
            <i className="fa fa-code-branch"></i> Swastik Versions
          </h2>
          <p>What’s New in Swastik (Version 9 to 20)</p>
        </div>
        <div className={swostikstyles.gridContainer}>
          {versions.map((version, index) => (
            <div key={index} className={swostikstyles.versionCard}>
              <div className={swostikstyles.versionTitle}>
                <h3>{version.title}</h3>
                <button className={swostikstyles.versionBtn}>
                  <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://hitechnepal.com/images/product-icons/slide-1.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hitechnepal.com/images/product-icons/slide-2.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hitechnepal.com/images/product-icons/slide-3.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
      <div ref={prevRef} className={styles.swiperButton}>
        Prev
      </div>
      <div ref={nextRef} className={styles.swiperButton}>
        Next
      </div>

      {/* Subscribe Section */}
      <Subscribe />
      {/* Footer */}
      <Footerlast />
    </>
  );
}
