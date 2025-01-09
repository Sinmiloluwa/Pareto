import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";  // Import LinkedIn icon

const Footer = () => {
  return (
    <footer className="bg-transparent mt-8">
      {/* Call-to-Action Section */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-gray-900">
          Want to Join Forces with Paretopay Today?
        </h2>
        <button className="mt-6 px-6 py-2 bg-primary text-white font-medium rounded hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>

      {/* Footer Links Section */}
      <div className="bg-background py-12 px-6 sm:px-12 mt-20">
        {/* Contact Us */}
        <div className="mb-6 md:hidden">
          <h3 className="font-semibold text-gray-800 mb-5">CONTACT US</h3>
          <p className="text-gray-600 mb-3 text-xs md:text-sm">paretopay@paretopay.org</p>
          <div className="flex space-x-6  text-gray-600">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/company/paretopay/" target="_blank" rel="noopener noreferrer" className="relative  hover:text-gray-800">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Us */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-gray-800 mb-5">CONTACT US</h3>
            <p className="text-gray-600 mb-3 text-xs md:text-sm">paretopay@paretopay.org</p>
            <div className="flex space-x-6 relative top-4 text-gray-600">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/paretopay/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">COMPANY</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><Link href="/about" className="hover:text-gray-800">About Us</Link></li>
              <li><a href="#" className="hover:text-gray-800">Contact Sales</a></li>
              <li><a href="#" className="hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="hover:text-gray-800">Perks</a></li>
              <li><a href="#" className="hover:text-gray-800">Blog</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">PRODUCTS</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><Link href="/trade-finance" className="hover:text-gray-800">Trade Finance</Link></li>
              <li><Link href="/global-payment" className="hover:text-gray-800">Global Payments</Link></li>
              <li><Link href="/fxrisk-management" className="hover:text-gray-800">FX Risk Management</Link></li>
              <li><Link href="/currency-conversion" className="hover:text-gray-800">Currency Accounts</Link></li>
              <li><Link href="/liquidity-provision" className="hover:text-gray-800">Liquidity Provision</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">LEGAL</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-gray-800">Terms of Use</Link></li>
              <li><a href="#" className="hover:text-gray-800">Acceptable Use Policy</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">SUPPORT</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-800">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-800">Video Tutorials</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom Section */}
      <div className="py-8 px-4 bg-background flex flex-col justify-center md:flex-row items-start md:items-center gap-12">
        <img src="/assets/logo.png" alt="Logo" className="w-auto" />
        <p className="text-gray-600 text-sm md:max-w-3xl">
          Paretopay provides global financial solutions, specializing in international payments, FX risk management, trade finance, and liquidity services. They offer businesses virtual currency accounts to ensure secure and efficient cross-border transactions, helping companies manage currency risks and optimize international operations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
