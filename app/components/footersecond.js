"use client";  // Mark this as a client-side component

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../styles/footersecond.module.scss';  // Import the correct CSS module

export default function FooterSecond() {
  const clients = [
    "https://hitechnepal.com/images/clients/jagdamba-cement.png",
    "https://hitechnepal.com/images/clients/pashupati-paints.png",
    "https://hitechnepal.com/images/clients/shikhar.png",
    "https://hitechnepal.com/images/clients/tribeni.png",
    "https://hitechnepal.com/images/clients/kathmandu-upatyaka.png",
    "https://hitechnepal.com/images/clients/cg.jpg",
    "https://hitechnepal.com/images/clients/qfx.png",
    "https://hitechnepal.com/images/clients/jagdamba-steel.png",
  ];
  
  return (
    <>
      {/* Our Reviews Section */}
      <div className={styles.ourReviews}>
        <h2>Our Reviews</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={60}
          pagination={{ 
            clickable: true, 
            dynamicBullets: true // ✅ Ensure only 2 bullets show
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className={styles.reviewsSwiper}
        >
          {[
            { name: "Saurav KC", role: "Manager", review: "We've been using Hitech ERP IMS since 10 years and have never been disappointed. Great software and great support..." },
            { name: "Shyam Dhungel", role: "Manager", review: "Hitech ERP IMS is the best enterprise management software I have ever used. Great software and great support..." },
            { name: "Aarav Sharma", role: "Business Owner", review: "This software has revolutionized our business operations. The team support is exceptional. Highly recommend it!" }
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
      

      {/* Clients Slider */}
      <div className={styles.sliderContainer}>
        <h2 className={styles.heading}>Few Of Our Clients</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }} // ✅ Updated pagination
          modules={[Autoplay, Pagination]}
          className={styles.swiper}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img src={client} alt={`Client ${index + 1}`} className={styles.clientImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </>
  );
}
