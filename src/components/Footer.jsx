import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">NestWave</h3>
            <p className="text-gray-400 mb-6">
              Creating intelligent living spaces that adapt to your lifestyle
              while reducing energy consumption.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Features",
                "Gallery",
                "Testimonials",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-teal-400 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  Lotus Residency <br />
                  Sector 12, Kharghar <br />
                  Navi Mumbai, Maharashtra <br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91-98264-13527</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@nestwave.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none bg-slate-800 text-white border border-slate-700"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
