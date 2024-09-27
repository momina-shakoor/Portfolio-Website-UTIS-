import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Phone:</span> 0321-4299087
              </li>
              <li>
                <span className="font-medium">Email:</span> info@utis.pk
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="clients"
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-500 hover:text-pink-700"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-blue-600"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            All rights reserved @ Unitech IT Solutions 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
