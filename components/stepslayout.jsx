import React from "react";

const StepLayout = ({
  stepNumber,
  title,
  description,
  bgColor = "bg-gray-100",
  textColor = "text-gray-800",
  roundedStyle = "rounded-none",
  customHeight = "min-h-[100px]",
}) => {
  return (
    <div
      className={`${bgColor} ${roundedStyle} p-6 flex flex-col justify-between ${customHeight}`}
    >
      <h3 className={`${textColor} text-lg font-semibold mb-2`}>{stepNumber}</h3>
      <h4 className="text-gray-900 font-medium text-xl mb-4 relative md:bottom-16  ">{title}</h4>
      <p className="text-gray-700 relative md:bottom-24 ">{description}</p>
    </div>
  );
};

export default StepLayout;
