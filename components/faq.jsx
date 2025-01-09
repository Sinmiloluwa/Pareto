import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What are International Payment Systems?", answer: "International payment systems are networks of information transmission and verification which allow online businesses and marketplace firms worldwide to send and receive online payments" },
    { question: "How Does Trade Finance Work?", answer: "Trade finance, also known as export finance, can help businesses succeed at trading internationally. Businesses selling goods or services overseas may face risks regarding cash flow and payment from buyers. Trade finance helps businesses to manage those risks by providing guarantees and advance payments." },
    { question: "What Does FX Risk Management Entails?", answer: "FX Risk management include series of services implemented to protect a client existing position from an unwanted move in exchange rates. FX risk management solutions are used by a broad range of market participants, including investors, traders and businesses." },
    { question: "What is the Role of an Online Payment System in e-commerce?", answer: "Online payment systems play an important role which is like a backbone in e-commerce. They help online merchants connect to their customers and enable every online transaction to be processed. Buyers get notification of payment status instantly and be protected from any fraudster with security system and SCA practice (Strong Customer Authentication)." },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Frequently Asked Questions</h1>
      <p className="text-gray-600 mt-2">
        Stuck on something? We’re here to help with all your questions and answer in one space.
      </p>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-3xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
