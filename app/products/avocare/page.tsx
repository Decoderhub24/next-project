"use client";
import { useRef, useEffect, useState } from "react";
import styles from "../ims-hitech-erp/ims-hitech-erp.module.scss"; // Import SCSS file
import swostikstyles from "../my-swostik-online/my-swostik-online.module.scss";
import Navbar from "@/app/components/navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaFilePowerpoint } from "react-icons/fa"; // PowerPoint Icon
import { HiArrowRight } from "react-icons/hi"; // Arrow Icon
import { FaCheck } from "react-icons/fa"; // Tick Icon
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Subscribe from "../../components/subscribe";
import Footerlast from "../../components/footerlast";

export default function ImsHitechErp() {
  // Features for the "Why this product" section
  const features = [
    {
      imgSrc: "https://hitechnepal.com/images/icons/001-monitor-tablet-and-smartohone.svg", // Replace with your image path
      title: "Manage your Books Anywhere",
      description:
        "By gaining access to the cloud, users can manage their books from anywhere. You can keep detailed information about your business, and all of it will be stored in a secure manner.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/30days-icon.png", // Replace with your image path
      title: "Collaborate with Branches and Teams",
      description:
        "We provide easy methods to collaborate with other teams. Users can easily communicate and update their data with various departments, teams, and branches.",
    },
    {
      imgSrc:
        "https://hitechnepal.com/images/product-icons/production-icon.png", // Replace with your image path
      title: "Fast, Reliable and Secured",
      description:
        "Rest assured that you will always have a fast and reliable connection with your data at all times. Never miss a beat and never worry about your data being viewed by unauthorized personnel.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/backup-icon.png", // Replace with your image path
      title: "Easily Track Your Inventory",
      description:
        "Keep detailed information about the items in your inventory. Users can track the order, shipment, and sale of all the items in their inventory.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/reporting-icon.png", // Replace with your image path
      title: "Easily Customize Reports and Documents",
      description:
        "In myswasiktonline.com, users get the option to customize reports and documents as per their needs. Access your information from the cloud and customize it easily.",
    },
    {
      imgSrc: "https://hitechnepal.com/images/product-icons/support-icon.png", // Replace with your image path
      title: "Sales and Accounts Receivable",
      description:
        "Most advanced billing systems, Credit Control Management, and sales analysis. Manage your customer better and increase your sales with the help of our latest solution.",
    },
  ];

  

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      const navigation = swiperInstance.params?.navigation;
      if (navigation && typeof navigation !== 'boolean') { // Check if navigation is not 'true'
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
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
            <h1>Avocare HIMS</h1>
            <p>
            A comprehensive, web-based, modular, integrated and automating software for any type of Standard Hospitals.</p>
          </div>

          {/* Right Side - Image */}
          <div className={styles.imagecontainer}>
            <img
              src="https://hitechnepal.com/images/avocare-header-image.png" // Change this to your actual image path
              alt="IMS Hitech ERP"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Third Section: "Why this product" */}
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
              <h3 className={swostikstyles.featureTitle}>
                {feature.title}
                <p className={swostikstyles.featureDescription}>
                  {feature.description}
                </p>
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* New Section: Learn More About Us */}
      <div className={styles.learnMoreContainer}>
      <div className={styles.learnMoreContent}>
        <h2>Learn More About Us</h2>
        <div className={styles.buttonGroup}>
          {/* Download Presentation Button */}
          <a href="/presentation.pdf" download className={styles.blueButton}>
            <FaFilePowerpoint className={styles.icon} />
            Download Presentation
          </a>

          {/* Request a Demo Button */}
          <a href="/request-demo" className={styles.redButton}>
            <HiArrowRight className={styles.icon} />
            Request a Demo
          </a>
          </div>
        </div>
      </div>

      {/* New Section: Solution for Different Industries */}
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
            {
              name: "Hospital",
              icon: "https://hitechnepal.com/images/product-icons/hospital.png",
            },
            {
              name: "School",
              icon: "https://hitechnepal.com/images/product-icons/school.png",
            },
            {
              name: "Factory",
              icon: "https://hitechnepal.com/images/product-icons/factory.png",
            },
            {
              name: "Farm",
              icon: "https://hitechnepal.com/images/product-icons/farm.png",
            },
            {
              name: "Logistics",
              icon: "https://hitechnepal.com/images/product-icons/logistics.png",
            },
            {
              name: "Retail",
              icon: "https://hitechnepal.com/images/product-icons/retail.png",
            },
            {
              name: "Trading",
              icon: "https://hitechnepal.com/images/product-icons/trading.png",
            },
            {
              name: "Books",
              icon: "https://hitechnepal.com/images/product-icons/books.png",
            },
            {
              name: "Construction",
              icon: "https://hitechnepal.com/images/product-icons/construction.png",
            },
            {
              name: "Hotel",
              icon: "https://hitechnepal.com/images/product-icons/hotel.png",
            },
          ].map((industry, index) => (
            <div key={index} className={styles.industryContent}>
              <div key={index} className={styles.industryItem}>
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
            {
              title: "Accounts Receivable",
              features: [
                "Detailed Party Ledger",
                "Party Reconciliation",
                "Customer Reminder Letter",
                "Summarized Party Ledger",
              ],
            },
            {
              title: "Material Management",
              features: [
                "Purchase Indent / Requisition Slip",
                "Purchase Order",
                "Stock Transfer / Adjustment",
                "Purchase Quotation",
              ],
            },
            {
              title: "Import / Purchase Management",
              features: [
                "Purchase GRN",
                "Purchase Invoice",
                "Purchase Additional Invoice – Bill Wise",
                "Consignment Wise Import Register",
              ],
            },
            {
              title: "Sales & Distribution",
              features: [
                "Sales Inquiry",
                "Sales Order",
                "Sales Invoice",
                "Order Cancellation",
              ],
            },
            {
              title: "Production Costing",
              features: [
                "Finished Goods Received",
                "Option of Indirect Exp in Production Costing",
                "Raw Material Costing through Purchase",
                "Bill of Material Management",
              ],
            },
            {
              title: "Budget & Planning",
              features: [
                "Month Wise Budget Allocation of Ledger",
                "Sales Planning vs Actual Reporting",
                "Month Wise Sales Planning on the Basis of Product",
                "Budget Analysis Report – Budget vs Actual Reporting",
              ],
            },
            {
              title: "Customer Care",
              features: [
                "Account Statement",
                "Top Customer (quantity wise / value wise)",
                "Customer Wise Sales Analysis",
                "Customer Wise Pending Order Analysis",
              ],
            },
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

        {/* View All Features Button */}
        <div className={styles.buttonContainer}>
          <a href="/features" className={styles.viewAllButton}>
            View All Features
          </a>
        </div>
      </div>
      

      {/* Our Reviews Section */}
      <div className={styles.ourReviews}>
        <h2>Our Reviews</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={60}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 10 seconds
          modules={[Pagination, Autoplay]} // Import Autoplay
          className={styles.reviewsSwiper}
        >
          {[
            {
              name: "Saurav KC",
              role: "Manager",
              review:
                "We've been using Hitech ERP IMS since 10 years and have never been disappointed. Great software and great support...",
            },
            {
              name: "Shyam Dhungel",
              role: "Manager",
              review:
                "Hitech ERP IMS is the best enterprise management software I have ever used. Great software and great support...",
            },
            {
              name: "Aarav Sharma",
              role: "Business Owner",
              review:
                "This software has revolutionized our business operations. The team support is exceptional. Highly recommend it!",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.reviewCard}>
              <span className={styles.quote}>“</span>
              <p>{testimonial.review}</p>
              <hr />
              <h3>{testimonial.name}</h3>
              <span className={styles.role}>{testimonial.role}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* How Our App Works Section */}
      <div className={styles.howAppWorks}>
        <h2>How Our App Works</h2>
        <p>
          The screenshots below will give you an extensive peek into the working
          of the system and show you how easy and user-friendly it is to work in
          our software.
        </p>
        <div className={styles.sliderContainer}>
          <Swiper
            slidesPerView={3} // Show 3 images at a time
            spaceBetween={-60} // Overlap images
            centeredSlides={true} // Center the active slide
            loop={true} // Enable looping
            pagination={false} // Disable pagination bullet
            modules={[Navigation]} // Enable Navigation module
            onSwiper={setSwiperInstance} // Store Swiper instance
            className={styles.imageSlider}
          >
            {[
              "https://hitechnepal.com/images/app-shot/app-shot-1.jpg",
              "https://hitechnepal.com/images/app-shot/app-shot-2.jpg",
              "https://hitechnepal.com/images/app-shot/app-shot-3.jpg",
              "https://hitechnepal.com/images/app-shot/app-shot-4.jpg",
              "https://hitechnepal.com/images/app-shot/app-shot-5.jpg",
            ].map((imageSrc, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className={styles.slideImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Attach buttons to refs */}
          <button ref={prevRef} className={styles.customPrev}>
            ‹
          </button>
          <button ref={nextRef} className={styles.customNext}>
            ›
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>
        <h2>Take the tour</h2>
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/JuqQvcuK9Fo"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Customer Logos Section */}
        <div className={styles.customerSection}>
          <h2>Happily used by over 10,000 customers.</h2>
          <div className={styles.customerLogos}>
            {[
              "https://hitechnepal.com/images/clients/cg.jpg",
              "https://hitechnepal.com/images/clients/qfx.png",
              "https://hitechnepal.com/images/clients/jagdamba-steel.png",
              "https://hitechnepal.com/images/clients/jagdamba-cement.png",
              "https://hitechnepal.com/images/clients/pashupati-paints.png",
              "https://hitechnepal.com/images/clients/shikhar.png",
              "https://hitechnepal.com/images/clients/tribeni.png",
              "https://hitechnepal.com/images/clients/kathmandu-upatyaka.png",
            ].map((logo, index) => (
              <img key={index} src={logo} alt={`Customer ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Text & Button Section */}
      <div className={styles.textButtonSection}>
        <div className={styles.textContainer}>
          <p>
            Inquire now with your queries or request a demo and
            <span> get a quick reply from one of our representatives </span>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <a href="/get-started" className={styles.primaryButton}>
            Inquire / Request a Demo Now
          </a>
        </div>
      </div>

      <Subscribe />
      <Footerlast />
    </>
  );
}
