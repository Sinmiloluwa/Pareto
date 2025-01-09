import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = (dropdownName) =>
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Us", href: "/about" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Trade Finance", href: "/trade-finance" },
        { name: "Global Payments", href: "/global-payment" },
        { name: "Liquidity Provision", href: "/liquidity-provision" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-gray-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <img src="/assets/logo.png" alt="Logo" className="h-6 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="text-gray-800 hover:text-primary font-medium flex items-center">
                    {link.name}
                    <svg
                      className="h-4 w-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {link.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="inline-flex px-4 py-2  text-gray-800 gap-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-4">
                          <div class="w-2 h-2 bg-primary rounded-full relative top-2"></div>
                          {dropdownItem.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 font-medium ${
                    router.pathname === link.href
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Action Buttons */}
          {/* <div className="hidden md:flex space-x-4">
            {actionButtons.map((button) => (
              <a
                key={button.name}
                href={button.href}
                className={`${
                  button.isPrimary
                    ? "bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600 font-medium text-sm"
                    : "text-gray-800 font-medium relative top-2 text-sm"
                }`}
              >
                {button.name}
              </a>
            ))}
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-full transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 space-y-6 ">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-6">
            {/* Sidebar Logo */}
            <img
              src="/assets/logo.png"
              alt="Sidebar Logo"
              className="h-6 w-auto"
            />
            {/* Close Button */}
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="space-y-8 relative top-14">
            {/* Home */}
            <Link
              href="/"
              className={`text-gray-800 text-lg  hover:bg-gray-100 px-4 py-2 rounded-md block border-b border-gray-200 ${
                router.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            {/* About Us */}
            <Link
              href="/about"
              className={`text-gray-800 text-lg hover:bg-gray-100 px-4 py-2 rounded-md block border-b border-gray-200 ${
                router.pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About Us
            </Link>
            {/* Other Links */}
            <div className="space-y-4">
              {navLinks
                .filter(
                  (link) => link.name !== "Home" && link.name !== "About Us"
                )
                .map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="relative">
                      <button
                        className="text-gray-800 text-lg w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md border-b border-gray-200"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        {link.name}
                        <svg
                          className={`h-4 w-4 ml-2 float-right ${
                            openDropdown === link.name
                              ? "transform rotate-180"
                              : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md border-b border-gray-200 ${
                                router.pathname === dropdownItem.href
                                  ? "text-primary"
                                  : ""
                              }`}
                            >
                              <div className="flex gap-4">
                                <div class="w-2 h-2 bg-primary rounded-full relative top-2"></div>
                                {dropdownItem.name}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-gray-800 text-lg hover:bg-gray-100 px-4 py-2 rounded-md block border-b border-gray-200 ${
                        router.pathname === link.href ? "text-primary" : ""
                      }`}
                    >
                      {link.name}
                    </a>
                  )
                )}

              {/* Action Buttons */}
              <div className="block p-4 relative top-10   md:hidden space-x-4">
                <a
                  href=""
                  className="bg-primary text-white p-6 py-2  rounded-md hover:bg-orange-600 font-medium text-sm"
                >
                  {" "}
                  Open an Account
                </a>

                <a
                  href=""
                  className="text-gray-800 font-medium text-lg relative "
                >
                  {" "}
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
