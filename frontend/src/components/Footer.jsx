import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-700">
      <div className="container mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Section 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              E-Commerce
            </h3>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for premium products at unbeatable prices. Fast
              shipping, secure payments, and world-class support.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-300 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-emerald-300 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-emerald-300 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                support@example.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                +1 (800) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                123 Main St, Your City
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Get the latest deals and updates right in your inbox.
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-md text-white transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between px-4">
          <p className="text-sm text-gray-500 mb-4 md:mb-0 md:text-left">
            &copy; {currentYear} E-Commerce. All rights reserved.
          </p>
          <div className="flex space-x-6 text-emerald-400">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-emerald-300 transition"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-emerald-300 transition"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-emerald-300 transition"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
