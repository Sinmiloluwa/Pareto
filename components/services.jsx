import Link from "next/link";
import { useState, useEffect } from "react";

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageSwitchInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    }, 3000); // Switch image every 3 seconds

    return () => clearInterval(imageSwitchInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="services mt-24 w-full h-auto xl:bg-cover">
      <div className="bg-bg-image h-[500px] bg-cover md:bottom-0"></div>
      <div className="relative md:top-0 bg-accent h-1/2 py-16">
        {/* First Section */}
        <div className="relative bottom-96 md:bottom-40 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20">
          <div className="flex flex-col justify-center items-start">
            {" "}
            {/* Change items-center to items-start */}
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-left">
              Trade Finance
            </h2>
            <p className="text-black text-sm mt-3 md:text-base text-left">
              International trade requires agility, and your financing solutions
              <span className="md:block">
                should match that speed. Paretopay’s Trade Finance service
              </span>{" "}
              gives you rapid access to the funds and support needed to
              <span className="md:block">
                maintain smooth global operations, without delays or
                disruptions.
              </span>
            </p>
            <Link
              href="/trade-finance"
              className="bg-primary text-white px-4 py-2 mt-6 rounded-md hover:bg-primary text-left"
            >
              Read More
            </Link>
          </div>

          {/* Image Switching with Slide Animation */}
          <div className="relative w-full max-w-md overflow-hidden">
            <div className="flex transition-all duration-1000 ease-in-out transform">
              {/* Image 1 */}
              <img
                src="/assets/image 9.png"
                alt="Trade Finance Image"
                className={`w-full h-auto object-contain transition-all duration-1000 ease-in-out ${
                  currentImage === 0
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-[100%] opacity-0"
                }`}
              />
              {/* Image 2 */}
              <img
                src="/assets/image 7.png"
                alt="Trade Finance Image"
                className={`w-full relative right-80 md:right-64 h-auto object-contain transition-all duration-1000 ease-in-out ${
                  currentImage === 1
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[100%] opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative bottom-52 mt-[0px] md:bottom-0 md:mt-[120px] grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            {" "}
            {/* Order 2 on mobile, 1 on desktop */}
            <img
              src="/assets/image 13.png"
              alt="Trade Finance Image"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-center items-start order-1 md:order-2">
            {" "}
            {/* Order 1 on mobile, 2 on desktop */}
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-left">
              Global Payments
            </h2>
            <p className="text-black text-sm mt-3 md:text-base text-left">
              Our advanced platform empowers African businesses to{" "}
              <span className="md:block">
                execute seamless intra-African and global transactions,
              </span>{" "}
              ensuring fast, secure, and efficient cross-border payments. With{" "}
              <span className="md:block">
                our innovative technology, businesses can navigate the
              </span>{" "}
              complexities of international trade effortlessly, expanding their
              <span className="md:block">
                reach and driving growth in the global marketplace.
              </span>
            </p>
            <Link
              href="/global-payment"
              className="bg-primary w-32 text-white px-4 py-2 mt-6 rounded-md hover:bg-primary text-left"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Third Section */}
        <div className="md:mt-[220px] grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20">
          <div className="flex flex-col justify-center items-start">
            {" "}
            {/* Change items-center to items-start */}
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-left">
              Foreign Exchange Risk Management
            </h2>
            <p className="text-black text-sm mt-3 md:text-base text-left ">
              Mitigate currency exchange risks with Paretopay’s proactive
              <span className=" md:block md:left-0">
                <span className="p-[4px] md:p-0">solutions.</span> Ideal for
                businesses handling international profits,
              </span>
              ensuring secure and efficient repatriation across different{" "}
              <span className="md:block">jurisdictions.</span>
            </p>
            <Link
              href="/fxrisk-management"
              className="bg-primary w-32 text-white px-4 py-2 mt-6 rounded-md hover:bg-primary text-left"
            >
              Read More
            </Link>
          </div>

          {/* Image Switching with Slide Animation */}
          <div className="relative w-full max-w-md overflow-hidden">
            <div className="flex transition-all duration-1000 ease-in-out transform">
              {/* Image 1 */}
              <img
                src="/assets/Financial Risk.png"
                alt="Trade Finance Image"
                className={`w-full h-auto object-contain transition-all duration-1000 ease-in-out ${
                  currentImage === 0
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-[100%] opacity-0"
                }`}
              />
              {/* Image 2 */}
              <img
                src="/assets/Property 1=Frame 1171280178.png"
                alt="Trade Finance Image"
                className={`w-full h-auto relative right-80 md:right-64 object-contain transition-all duration-1000 ease-in-out ${
                  currentImage === 1
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[100%] opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="mt-28  md:mt-[220px] grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            {" "}
            {/* Order 2 on mobile, 1 on desktop */}
            <img
              src="/assets/Frame 1171280177.png"
              alt="Currency Accounts"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-center items-start order-1 md:order-2">
            {" "}
            {/* Order 1 on mobile, 2 on desktop */}
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-left">
              Currency Accounts
            </h2>
            <p className="text-black text-sm mt-3 md:text-base text-left">
              Effortlessly manage multiple currencies with our virtual business
              <span className="md:block">
                <span className="p-[1px] md:p-0"> accounts.</span> Paretopay
                offers secure, seamless banking solutions,
              </span>
              enabling global operations with ease and efficiency. Perfectly{" "}
              <span className="md:block">
                tailored for your business needs, anywhere in the world.
              </span>
            </p>
            <Link
              href="/currency-conversion"
              className="bg-primary w-32 text-white px-4 py-2 mt-6 rounded-md hover:bg-primary text-left"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="mt-28  md:mt-[220px] grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20">
          <div className="flex flex-col justify-center items-start">
            {" "}
            {/* Change items-center to items-start */}
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-left">
              Liquidity Provision
            </h2>
            <p className="text-black text-sm mt-3 md:text-base text-left">
              Paretopay serves as a liquidity provider for international firms
              <span className="relative p-[3px] md:p-0 md:left-0 md:block">
                and payment companies. We accept USD, EUR, or GBP in key
              </span>
              jurisdictions (USA, UK, Canada, Germany) and convert them
              <span className="p-[1px] md:p-0"> to</span>
              <span className="md:block">
                <span className="p-[3px] md:p-0">local </span>currencies in
                emerging markets.
              </span>
            </p>
            <Link
              href="/liquidity-provision"
              className="bg-primary text-white px-4 py-2 mt-6 rounded-md hover:bg-primary text-left"
            >
              Read More
            </Link>
          </div>

          <div className="relative w-full max-w-md overflow-hidden">
            {/* Container for Images */}
            <div className="flex transition-all duration-1000 ease-in-out transform">
              <img
                src="/assets/Property 1=Frame 1171280178.png"
                alt="Liquidity Provision Image"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
