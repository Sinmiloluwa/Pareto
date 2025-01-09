import React, { useState } from "react";

const Glossary = ({ title, description, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 p-6 bg-white mt-4 ">
      {/* Title and Description */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Glossary Items */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-gray-800 font-medium focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span>{item.term}</span>
              <span className="text-gray-400">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{item.definition}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glossary;
