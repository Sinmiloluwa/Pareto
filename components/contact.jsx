import React from "react";
import Footer from "./footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen mt-14">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-background from-30% to-con to-100% py-40 flex flex-col items-start justify-center px-8">
        <div className="max-w-6xl relative bottom-20">
          <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Reach out to us with any questions or comments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="order-last md:order-first relative bottom-24 md:bottom-0 md:top-4">
            <h2 className=" text-2xl font-semibold text-gray-800 mb-6">
              What Happens Next
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              After contacting us, you can expect a response within 24 hours,
              followed by an initial answer or request for more information, a
              resolution to your issue as quickly as possible, and a follow-up
              if needed to ensure your satisfaction.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="bg-background w-full shadow-md rounded-lg p-10 relative z-40 bottom-44">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Get in touch</h2>
            <p className="text-gray-600 mb-6 text-sm font-medium text-center">
              Let&apos;s connect! Whether you have feedback, inquiries, or just want
              to say hello, don&apos;t hesitate to get in touch with us. We&apos;re eager
              to hear from you.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full border p-2 bg-transparent border-gray-400 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border p-2 bg-transparent border-gray-400 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full border p-2 bg-transparent border-gray-400 rounded-md focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-44 bg-primary text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 relative md:bottom-18 flex flex-col md:flex-row items-center justify-center  gap-8 md:gap-16">
          <div className="flex flex-col items-center text-gray-600 text-sm">
            <div className="p-4 ">
              <img
                src="assets/Frame 1171280313.png"
                alt="Email"
                className=""
              />
            </div>
            <span className="mt-2">paretopay@Paretoex.com</span>
          </div>
          <div className="flex flex-col items-center text-gray-600 text-sm">
            <div className=" p-4 ">
              <img
                src="/assets/Frame 1171280314.png"
                alt="Phone"
              />
            </div>
            <span className="mt-2">+2348108109190</span>
          </div>
          <div className="flex flex-col items-center text-gray-600 text-sm">
            <div className=" p-4 ">
              <img
                src="/assets/Frame 1171280315.png"
                alt="Website"
              />
            </div>
            <a
              href="https://www.paretopay.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 hover:underline"
            >
              www.Paretoex.com
            </a>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default ContactUs;
