import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="bg-white mt-24 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <p className="text-primary font-semibold text-sm mb-4">
            Discover Paretopay
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Your Gateway to Efficient Global Financial Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Paretopay, we specialize in providing seamless financial
            solutions, including international payment transfers, FX risk
            management, and comprehensive treasury services. We empower
            corporate organizations and individuals across Africa by delivering
            expert financial consulting and customized strategies for growth.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            With a focus on transparent, reliable, and efficient services, we
            ensure smooth cross-border payments, rapid settlements, and
            liquidity solutions, all tailored to meet the diverse needs of our
            clients.
          </p>
        </div>

        {/* Image and Statistics */}
        <div className="grid grid-cols-1 gap-6">
          {/* Image */}
          <img
            src="/assets/Frame 1171280220.png"
            alt="Team working"
            className="rounded-lg shadow-md w-full"
          />
          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 text-center text-gray-800 text-sm">
            <div>
              <p className="text-2xl font-semibold">2022</p>
              <p className="mt-2">Firm founded</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">10+</p>
              <p className="mt-2">Currency pairs</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">10+</p>
              <p className="mt-2">Country active in</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">50+</p>
              <p className="mt-2">Corporate clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 md:flex-row mt-20">
        <div className="bg-background p-6 rounded-lg">
          <p className="text-primary text-sm font-semibold">Our Vision</p>
          <h2 className="text-black font-semibold text-lg mt-1">
            Empowering Financial Growth Through Innovation
            <span className="md:block">and Expertise</span>
          </h2>
          <p className="mt-4">
            To be the leading financial gateway for individuals and businesses
            across Africa, simplifying global transactions, optimizing financial
            operations, and driving economic <span className="md:block">
              growth through innovative, transparent, and reliable financial
              solutions.
            </span>
          </p>
        </div>

        <div className="bg-background p-6 rounded-lg">
          <p className="text-primary text-sm font-semibold">Our Mission</p>
          <h2 className="text-black font-semibold text-lg mt-1">
            Transforming Financial Services with Customized
            <span className=""> Solutions for Every Need</span>
          </h2>
          <p className="mt-4">
            Our mission is to provide comprehensive financial solutions
            that empower corporate organizations and individuals across Africa.
            We specialize in financial <span className="md:block">
             consulting, international payment, transfers, treasury</span> and management.
          </p>
        </div>
      </div>

      {/* Product Suite Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 mt-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          {/* Product Suite Title */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-3xl font-semibold text-gray-900">
              Product Suite
            </h2>
          </div>

          {/* Grid Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3">
            {/* Card 1 */}
            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-primary text-sm font-medium">01</h3>
              <h4 className="text-xl font-semibold text-gray-900 mt-2">
                Treasury Solutions
              </h4>
              <p className="text-gray-700 mt-4">
                Paretopay provides expert advice on financial planning,
                investment strategies, and risk management tailored for SMEs,
                corporate organizations, and high-net-worth individuals. We
                deliver customized strategies to optimize financial performance
                and growth.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-primary text-sm font-medium">02</h3>
              <h4 className="text-xl font-semibold text-gray-900 mt-2">
                International Payment Transfer
              </h4>
              <p className="text-gray-700 mt-4">
                We offer secure and rapid cross-border transactions with support
                for multiple currencies and countries with no hidden charges,
                ensuring reliable and timely fund transfers.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-primary text-sm font-medium">03</h3>
              <h4 className="text-xl font-semibold text-gray-900 mt-2">
                FX Risk Management
              </h4>
              <p className="text-gray-700 mt-4">
                We provide comprehensive liquidity solutions and FX hedging to
                manage cash flow and mitigate currency risks, providing seamless
                end-to-end systems for efficient financial operations.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-primary text-sm font-medium">04</h3>
              <h4 className="text-xl font-semibold text-gray-900 mt-2">
                Trade Finance Solutions
              </h4>
              <p className="text-gray-700 mt-4">
                We offer tailored trade finance services like letters of credit,
                documentary collections, and supply chain finance, helping
                businesses manage working capital, reduce trade risks, and
                ensure smooth cross-border transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="flex-shrink-0">
          <Image
            src="/assets/Frame 1171280244.png"
            alt="image"
            width={450}
            height={450}
          />
        </div>

        <div className="md:text-left">
          <h2 className="text-black font-semibold text-xl mt-1">
            Simplifying financial operations <span className="md:block">across
            borders.</span> 
          </h2>

          <p className="mt-4">
            Paretopay specializes in streamlining global financial transactions,
            offering a comprehensive suite of services including treasury
            solutions, FX risk management, international payment transfers, and
            trade finance. Catering primarily to SMEs, corporate organizations,
            and high-net-worth individuals, we leverage our expertise in
            managing African currencies and facilitating cross-border
            transactions to simplify financial operations for businesses
            navigating the complexities of global finance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">
          Why Choose Paretopay?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="border-r-4 border-primary pr-6 pl-4">
            <h3 className="text-lg font-semibold text-primary">
              Seamless Integration and Instant Oversight
            </h3>
            <p className="text-gray-700 mt-2">
              Paretopay blends effortlessly into your current financial system,
              making international payments easy to handle. Our platform
              provides real-time updates, allowing you to track payments and
              maintain full control over your financial activities with ease.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border-r-4 border-primary pr-6 pl-4">
            <h3 className="text-lg font-semibold text-primary">
              Swift, Secure, and Fully Compliant Payments
            </h3>
            <p className="text-gray-700 mt-2">
              With a strong focus on speed and security, Paretopay ensures your
              transactions are processed quickly—often within 24 hours—while
              adhering to the highest international compliance standards. This
              means your global payments are not only fast but fully protected.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border-r-4 border-primary pr-6 pl-4">
            <h3 className="text-lg font-semibold text-primary">
              Cost-effective Rates with Expert Financial Support
            </h3>
            <p className="text-gray-700 mt-2">
              Benefit from Paretopay&#39;s competitive rates, designed to reduce
              your cross-border costs. Plus, our team of experienced financial
              professionals is available to help you navigate currency risks,
              improve cash flow, and make informed financial decisions to keep
              your business thriving.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border-r-4 border-primary pr-6 pl-4">
            <h3 className="text-lg font-semibold text-primary">
              Tailored Solutions for Diverse Needs
            </h3>
            <p className="text-gray-700 mt-2">
              Paretopay caters to a broad range of businesses, from SMEs to
              large corporations, offering customized financial strategies that
              fit specific business goals. Whether it&apos;s managing complex
              cross-border payments or mitigating FX risks, Paretopay delivers
              personalized solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
