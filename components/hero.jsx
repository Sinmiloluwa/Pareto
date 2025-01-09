import React from "react";
import StatsSection from "./stats";

const HeroSection = () => {
  return (
    <section className="relative text-black py-24 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2  lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            Simplified.<span className="text-primary">Global.</span> Payments
          </h1>
          <p className="text-[16px] text-secondary mb-8">
            Fast trade financing and secure cross-border transactions{" "}
            <span className="md:block">
              with Pareto. Empower your business for the global market.
            </span>
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="#"
              className="bg-primary text-white py-3 px-6 rounded-lg text-sm md:text-lg font-medium transition duration-300"
            >
              Start Trading
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative top-6 md:top-36">
          <img
            src="/assets/image 53.png" // Replace with your image
            alt="Hero"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>


      <StatsSection/>

    </section>
  );
};

export default HeroSection;
