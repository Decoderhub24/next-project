"use client";
import React, {  useState } from "react";
import Navbar from "@/app/components/navbar";
import ChallangeSection from "../../services/challangeSection";
import Footerlast from "@/app/components/footerlast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "../hotel-management-system/hotel-management-system.css";

const Hospitality = () => {
  const cards = [
    {
      id: 1,
      title: "eZee FrontDesk - Hotel Management System",
      content1:
        "An innovatory property management system, eZee FrontDesk helps hotels and hotel chains to run their business operations conveniently and productively. Devised and developed with latest technology, this PMS satisfies the international hospitality norms regardless of the type and size of your property.",
      content2:
        "Carrying a user-friendly user interface, the software brings together every single aspect of property management under a single interface and overcome the frontdesk task hassles. Despite being an extremely powerful and foolproof property management software that combines extraordinary features, it does not burn a hole in your pocket and carries a surprisingly non-premium price tag.",
      content3: "JUST. DONT. MISS. IT.",
      content4:
        "Whether it is front-desk and reservation module, or the housekeeping one, the travel desk, or the back-office interface; every component of eZee FrontDesk has been built and designed keeping in mind the rigorous terms of property management. eZee FrontDesk has been widely recognized as a software that meets the requirements of even the most demanding of international properties.",
      image: "https://hitechnepal.com/images/hotel_software.jpg",
    },
    {
      id: 2,
      title: "eZee BurrP! - Resturant software",
      content1:
        "eZee BurrP! suffices all the tests of being an ideal point-of-sale system. It operates efficiently; utilizing assorted modules of operations combined with supplementary features despite the kind of your restaurant or whether your restaurant is a single store or a nationwide chain.",
      content2:
        "The point-of-sale offers many modules for table reservation, stock, and material management, a kitchen display system for new orders, loyalty programs, promotions and gift vouchers, payroll, and a lot more. Additionally, the web-based reporting helps anyone keep track of all daily sales and analytics reports from anywhere in the world.eZee BurrP! is compatible with eZee FrontDesk and can easily be integrated with it for ease of operations. It also offers complete PDA support and several third party interfaces; thus helping you achieve utmost productivity at your joint.",
      content3: "",
      content4:
        "The best part about eZee BurrP! is that it costs very little to acquire and integrate. You do not have to give any specialized training to your staff or bring in any additional hardware. You can be up and running in just a few hours and that too without stopping operations or even disrupting the regular flow of business!",
        image: "https://hitechnepal.com/images/burrp.png",
    },
    {
      id: 3,
      title: "eZee Absolute - hotel Booking software",
      content1:
        "An accurate management of sales and guest interaction process in small to mid-sized hotels and hotel groups is the prime appeal of the cloud based SaaS enabled Property Management system-eZee Absolute. It is a distinct and unified answer to all requirements of a Hotel Management Software. In this changing industry, eZee Absolute presents a web based system through the Pay per use concept.",
      content2:
        "The Hotel Booking Software covers all major operations with its robust features starting from online booking, check-in, check-out, group booking, house keeping, mini bar, banquet, maintenance and many more. In addition, eZee Absolute offers interfaces with many third party software and hardware solutions like Financial Accounting System, Key Card Lock, Payment Gateways and Call Accounting.",
      content3: "",
      content4:
        "The cloud system also facilitates the managerial users to generate multiple report types according to changing requirement. All the data is stored on secured servers with minimum redundancy which makes sure that your hotel stays operational 24×7. The online hotel software can be accessed anytime from anywhere from various devices.",
        image: "https://hitechnepal.com/images/absolute.png",
    },
    {
      id: 4,
      title: "eZee Reservation - Booking Engine",
      content1:
        "eZee Reservation is an Online Booking Engine which integrates flawlessly with your property website; hence enabling your clients to reserve rooms, and view promotional packages and offers straight from the website. Its implementation helps in upsurging your international horizon by providing your guests a remarkable booking experience.",
      content2:
        "The booking engine lets you setup your entire property details through single dashboard while giving you direct access to key functional areas of your property. Being cloud based, it does not require any kind of hardware or software upgrade, but only a good internet connection and web browser to get started. eZee Reservation runs on all the major internet browsers and can be accessed from smart phones and tablets as well.",
      content3: "The reservation system is full of cutting-edge features that lets you track your property bookings and continuously engage the bookers or even direct the bookings to your eZee PMS or any other Hotel Software you may be using. It is a perfect solution for individual hotels, hotel chains and resorts. The customization options offers full control over the branding which fits naturally into the hotel’s website aesthetically. Its intuitive reporting system gives you up-to-the-minute report of the bookings your property has received through the internet.",
      content4:
        "Another great feature of eZee Reservation is the Central Reservation System, which gives you unified access to rates, inventory and bookings of all properties under a single panel; thus streamlining operations for chain properties.",
        image: "https://hitechnepal.com/images/reservation.png",
    },
    {
      id: 5,
      title: "eZee Centrix - Channel Manager",
      content1:
        "eZee Reservation is an Online Booking Engine which integrates flawlessly with your property website; hence enabling your clients to reserve rooms, and view promotional packages and offers straight from the website. Its implementation helps in upsurging your international horizon by providing your guests a remarkable booking experience.",
      content2:
        "The booking engine lets you setup your entire property details through single dashboard while giving you direct access to key functional areas of your property. Being cloud based, it does not require any kind of hardware or software upgrade, but only a good internet connection and web browser to get started. eZee Reservation runs on all the major internet browsers and can be accessed from smart phones and tablets as well.",
      content3: "The reservation system is full of cutting-edge features that lets you track your property bookings and continuously engage the bookers or even direct the bookings to your eZee PMS or any other Hotel Software you may be using. It is a perfect solution for individual hotels, hotel chains and resorts. The customization options offers full control over the branding which fits naturally into the hotel’s website aesthetically. Its intuitive reporting system gives you up-to-the-minute report of the bookings your property has received through the internet.",
      content4:
        "Another great feature of eZee Reservation is the Central Reservation System, which gives you unified access to rates, inventory and bookings of all properties under a single panel; thus streamlining operations for chain properties.",
        image: "https://hitechnepal.com/images/centrix.png",
    },
    {
      id: 6,
      title: "eZee iMenu - Resturanr Menu Software",
      content1:
        "eZee Reservation is an Online Booking Engine which integrates flawlessly with your property website; hence enabling your clients to reserve rooms, and view promotional packages and offers straight from the website. Its implementation helps in upsurging your international horizon by providing your guests a remarkable booking experience.",
      content2:
        "The booking engine lets you setup your entire property details through single dashboard while giving you direct access to key functional areas of your property. Being cloud based, it does not require any kind of hardware or software upgrade, but only a good internet connection and web browser to get started. eZee Reservation runs on all the major internet browsers and can be accessed from smart phones and tablets as well.",
      content3: "The reservation system is full of cutting-edge features that lets you track your property bookings and continuously engage the bookers or even direct the bookings to your eZee PMS or any other Hotel Software you may be using. It is a perfect solution for individual hotels, hotel chains and resorts. The customization options offers full control over the branding which fits naturally into the hotel’s website aesthetically. Its intuitive reporting system gives you up-to-the-minute report of the bookings your property has received through the internet.",
      content4:
        "Another great feature of eZee Reservation is the Central Reservation System, which gives you unified access to rates, inventory and bookings of all properties under a single panel; thus streamlining operations for chain properties.",
        image: "https://hitechnepal.com/images/imenu.png",
    },
    {
      id: 7,
      title: "eZee iFeedback - Feedback System",
      content1:
        "eZee Reservation is an Online Booking Engine which integrates flawlessly with your property website; hence enabling your clients to reserve rooms, and view promotional packages and offers straight from the website. Its implementation helps in upsurging your international horizon by providing your guests a remarkable booking experience.",
      content2:
        "The booking engine lets you setup your entire property details through single dashboard while giving you direct access to key functional areas of your property. Being cloud based, it does not require any kind of hardware or software upgrade, but only a good internet connection and web browser to get started. eZee Reservation runs on all the major internet browsers and can be accessed from smart phones and tablets as well.",
      content3: "The reservation system is full of cutting-edge features that lets you track your property bookings and continuously engage the bookers or even direct the bookings to your eZee PMS or any other Hotel Software you may be using. It is a perfect solution for individual hotels, hotel chains and resorts. The customization options offers full control over the branding which fits naturally into the hotel’s website aesthetically. Its intuitive reporting system gives you up-to-the-minute report of the bookings your property has received through the internet.",
      content4:
        "Another great feature of eZee Reservation is the Central Reservation System, which gives you unified access to rates, inventory and bookings of all properties under a single panel; thus streamlining operations for chain properties.",
        image: "https://hitechnepal.com/images/ifeedback.png",
    },
    {
      id: 8,
      title: "Appytect - Mobile App Builder",
      content1:
        "eZee Reservation is an Online Booking Engine which integrates flawlessly with your property website; hence enabling your clients to reserve rooms, and view promotional packages and offers straight from the website. Its implementation helps in upsurging your international horizon by providing your guests a remarkable booking experience.",
      content2:
        "The booking engine lets you setup your entire property details through single dashboard while giving you direct access to key functional areas of your property. Being cloud based, it does not require any kind of hardware or software upgrade, but only a good internet connection and web browser to get started. eZee Reservation runs on all the major internet browsers and can be accessed from smart phones and tablets as well.",
      content3: "",
      content4:
        "The reservation system is full of cutting-edge features that lets you track your property bookings and continuously engage the bookers or even direct the bookings to your eZee PMS or any other Hotel Software you may be using. It is a perfect solution for individual hotels, hotel chains and resorts. The customization options offers full control over the branding which fits naturally into the hotel’s website aesthetically. Its intuitive reporting system gives you up-to-the-minute report of the bookings your property has received through the internet.",
        image: "https://hitechnepal.com/images/appytect.png",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(cards[3]);

  return (
    <>
      <Navbar />

      
  
      {/* Header Section - Updates Dynamically */}
      <div className="header-section">
        <h1>{selectedCard.title}</h1>
        <p>Home / Hospitality Solutions /<span>{selectedCard.title}</span></p>
      </div>
  
      <div className="hospitality-container">
        {/* Left Content - Selected Card Details */}
        <div className="leftContent">
          <div className="card-content1">
            <div className="image-content">
              <img src={selectedCard.image} alt={selectedCard.title} width={300} height={200} />
            </div>
            <div className="text-content">
              <p>{selectedCard.content1}</p><br />
              <p>{selectedCard.content2}</p><br />
              <p>{selectedCard.content3}</p><br />
            </div>
          </div>
          <div className="card-content2">
            <p>{selectedCard.content4}</p><br />
            <button className="blue-btn">More info about eZee FrontDesk</button>
            <button className="red-btn">Download Hotel PMS</button><br />
            <button className="blue-btn">Download Brochure</button>
          </div>
        </div>
  
        {/* Right Content - Cards List */}
        <div className="right-content">
          <div className="cardsection">
            <h1 className="card-title">Hospitality Solutions</h1>
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card ${selectedCard.id === card.id ? "active" : ""}`}
                onClick={() => setSelectedCard(card)} // Updates selected card
              >
                <h3>
                  <FontAwesomeIcon icon={faAngleRight} className="rightArrow" /> {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      <ChallangeSection />
      <Footerlast />
    </>
  );
};

export default Hospitality;
