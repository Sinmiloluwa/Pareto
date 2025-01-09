import React from "react";
import StepLayout from "../components/stepslayout";

const HowItWorks = ({ steps }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-20">
        How it Works
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-auto">
        {steps.map((step, index) => (
          <StepLayout
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            bgColor={step.bgColor}
            textColor={step.textColor}
            roundedStyle={step.roundedStyle}
            customHeight={step.customHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
