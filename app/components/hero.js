import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-section bg-gray-100">
      <div className="relative flex flex-col items-center text-center lg:text-left lg:flex-row">
        {/* Background Image */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/image.png" // Replace with your image path
            alt="Web-Based Accounting and Inventory Management"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col z-10 p-10 bg-white shadow-lg rounded-lg lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            Web-Based Accounting and Inventory Management Software
          </h1>
          <p className="text-gray-600 mt-4">
            Now do your accounting from anywhere, anytime, and on any device—Desktop, Mobile, and Tab.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
