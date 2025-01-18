import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg1.png')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Find the best shoes and sneakers here!</p>
        <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
