 'use client';
import { useState, useEffect } from 'react';

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clicked, setClicked] = useState(false); // New state to track user interaction

  const slides = [
    {
      id: 1,
      title: 'Web-Based Accounting Software',
      description: 'Now do your accounting from anywhere, anytime, and any device.',
      image: 'https://hitechnepal.com/images/erp-banner-icon4.png',
      background: 'https://hitechnepal.com/images/erp-solution.jpg',
    },
    {
      id: 2,
      title: 'Seamless Financial Management',
      description: 'Manage all your finances effortlessly with our tools.',
      image: 'https://hitechnepal.com/images/swastik-business-accounting-banner.png',
      background: 'https://hitechnepal.com/images/business-accounting.jpg',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setClicked(true); // User clicked on prev button
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setClicked(true); // User clicked on next button
  };

  // Automatically change slide every 9 seconds, but stop when the user clicks a button
  useEffect(() => {
    if (!clicked) {
      const interval = setInterval(() => {
        nextSlide();
      }, 9000); // Change slide every 9 seconds

      // Cleanup interval when the component is unmounted or clicked state changes
      return () => clearInterval(interval);
    }
  }, [clicked]); // Dependency on clicked, so it resets after user interaction

  return (
    <div className="relative group" style={{
      height: '100vh',
    }}>
      {/* Slider Container */}
      <div
        className="relative bg-cover bg-center overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          height: '100%',
        }}
      >
        {/* Slide Wrapper */}
        <div
          className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-full relative bg-cover bg-center zoom-background"
              style={{
                backgroundImage: `url(${slide.background})`,
                height:'100%',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Dark overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="relative flex items-center justify-center h-full z-10">
                {/* Text and Image Wrapper */}
                <div className="flex flex-col md:flex-row w-full text-white p-6 ml-32 justify-center items-center">
                  {/* Text Section */}
                  <div className="p-4">
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-lg mb-6">{slide.description}</p>
                    <button className="readMoreButton">Read More</button>
                  </div>

                  {/* Image Section */}
                  <div className="p-4 w-full md:w-1/2 flex justify-center">
                    <img
                      src={slide.image}
                      alt="Slider Image"
                      className="w-full h-auto max-w-xs object-contain shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-2/4 left-0 -translate-y-1/2 bg-black bg-opacity-50 w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 group-hover:scale-y-125"
        onClick={prevSlide}
        style={{ margin: 0, padding: 0 }}
      >
        <span className="text-white text-3xl">&#10094;</span>
      </button>
      <button
        className="absolute top-2/4 right-0 -translate-y-1/2 bg-black bg-opacity-50 w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 group-hover:scale-y-125"
        onClick={nextSlide}
        style={{ margin: 0, padding: 0 }}
      >
        <span className="text-white text-3xl">&#10095;</span>
      </button>

      <style jsx>{`
        /* Keyframes for zoom effect on background */
        @keyframes zoomEffect {
          0% {
            background-size: 100%;
          }
          50% {
            background-size: 105%; /* Slight zoom-in */
          }
          100% {
            background-size: 100%; /* Zoom back to normal */
          }
        }

        /* Apply animation only to the background container */
        .zoom-background {
          animation: zoomEffect 15s infinite ease-in-out;
          background-size: 100%; /* Start with normal background size */
        }

        /* Styling for the Read More button */
      .readMoreButton {
  display: inline-block;
  padding: .4rem 1rem;
  margin: 10px;
  border: 2px solid #2d2f91;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.readMoreButton:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2d2f91;
  border-radius: 10rem;
  z-index: -2;
}

.readMoreButton:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: white;
  color: black;
  transition: .3s ease-in-out;
  border-radius: 10rem;
  z-index: -1;
}

.readMoreButton:hover {
  color: black;
}

.readMoreButton:hover:before {
  width: 100%;
}

.readMoreButton:not(:hover):before {
  width: 0%;
  transition: width .3s ease-in-out; /* Ensures it retracts from left to right */
}

      `}</style>
    </div>
  );
};

export default CustomSlider;
