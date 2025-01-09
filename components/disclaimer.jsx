import { useEffect, useState } from "react";

const Disclaimer = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10000); //
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return showPopup ? (
    <div className="animate-jump fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" bg-gradient-to-r from-background from-30% to-con to-100%  h-auto overflow-hidden p-10 rounded-lg shadow-lg w-[500px] text-center relative">
        <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>

        <b>NOTICE OF NON-AFFILIATION</b>

        <p className="text-gray-600 text-left mt-4 mb-4">
          This notice is to confirm that Pareto Technologies Limited is entirely
          independent and has no association or affiliation with Pareto
          International Holding Limited in any form. As such, Pareto
          Technologies Limited will not be liable for any loss arising from
          transactions with Pareto International Holding Limited.
        </p>

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
        >
            <div className="p-2">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
            </div>
   
        </button>
      </div>
    </div>
  ) : null;
};

export default Disclaimer;
