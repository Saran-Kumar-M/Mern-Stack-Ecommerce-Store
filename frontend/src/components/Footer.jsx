import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter a valid email.");
    // You can replace this with actual logic
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-white px-6 py-12 border-t border-gray-800 relative z-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">ShopMate</h2>
          <p className="text-sm text-gray-400">
            Premium quality products just for you.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@shopmate.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> New York, USA
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 w-full text-sm text-white outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {currentYear} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
