import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startAnimation) {
          setStartAnimation(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    // Start observing the sectionRef element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-2  md:grid-cols-4 items-center justify-center gap-44 space-x-8 relative text-left top-24 right-4 md:right-0 md:top-44 p-8 md:flex md:flex-row md:gap-12 overflow-hidden"
    >
      {/* First block for Completed Settlements and Transaction Volume */}
      <div className="grid grid-rows-2 md:flex md:flex-row items-center md:justify-between md:gap-16 gap-12">
        <div>
          <div className="text-2xl md:text-4xl font-bold text-primary">
            {startAnimation ? (
              <CountUp start={0} end={7000} duration={2} />
            ) : (
              0
            )}
          </div>
          <p className="mt-2 text-gray-600">Completed settlements since 2022</p>
        </div>
        <div>
          <div className="text-2xl md:text-4xl font-bold text-primary">
            $3,000,000,000
          </div>
          <p className="mt-2 text-gray-600">In transaction volume</p>
        </div>
      </div>

      {/* Second block for Corporate Clients and Countries */}
      <div className="grid grid-rows-2 justify-between md:flex md:flex-row items-center relative right-8 md:right-0 md:justify-between md:gap-16 gap-12">
        <div>
          <div className="text-2xl md:text-4xl font-bold text-primary">
            {startAnimation ? <CountUp start={0} end={50} duration={2} /> : 0}
          </div>
          <p className="mt-2 text-gray-600">Corporate clients</p>
        </div>
        <div>
          <div className="text-2xl md:text-4xl font-bold text-primary">
            <span>18+</span>
          </div>
          <p className="mt-2 text-gray-600">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
