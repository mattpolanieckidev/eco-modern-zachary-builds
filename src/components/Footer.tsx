
import React from "react";
import { Link } from "react-router-dom";
import ScrollLink from "./ScrollLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              ZACHARY ETHAN<span className="text-eco-green-500">.</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful, modern, and eco-friendly architectural designs that harmonize with nature and enhance human experience.
            </p>
            <div className="flex space-x-4">
              {["F", "T", "I", "L"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-eco-green-500 h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-eco-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-eco-green-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="/#services"
                  className="text-gray-400 hover:text-eco-green-400 transition-colors"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/#projects"
                  className="text-gray-400 hover:text-eco-green-400 transition-colors"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/#contact"
                  className="text-gray-400 hover:text-eco-green-400 transition-colors"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              614 Hempstead Gardens Drive<br />
              West Hempstead, N.Y. 11552<br />
              United States
            </address>
            <p className="text-gray-400 mt-4">
              <span className="block">Phone: 631-900-ZACH (631-900-9224)</span>
              <span className="block">Email: info@zacharyethan.com</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zachary Ethan Architecture. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-eco-green-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-eco-green-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-eco-green-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
