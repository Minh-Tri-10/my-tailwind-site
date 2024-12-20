import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-700 py-6 mt-16">
      <div className="container flex justify-between items-center mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-red-500">
            CHRISTMAS <span className="text-yellow-400">STORE</span>
          </h2>
          <span className="text-green-500 text-2xl ml-1">🎄</span>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4 text-yellow-200 text-2xl">
          <a href="#" className="hover:text-red-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-red-400">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-red-400">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
