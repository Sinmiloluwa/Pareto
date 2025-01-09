import React from "react";

const FinancialBenefits = ({ title, benefits, subheading, image }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col  md:flex-row items-center md:items-start gap-8 md:gap-28 p-6 ">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Team Collaboration"
          className="rounded-lg w-full  object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col relative md:top-28">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <h2 className="font-semibold text-gray-600 mb-4">{subheading}</h2>
        <ul className="space-y-2 text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-1.5 bg-orange-500 rounded-full"></span>
              <p className="ml-3">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialBenefits;
