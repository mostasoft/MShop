"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-bold  text-yellow-400 mb-4">M <span className="text-white">Shop</span></h3>
          <p className="text-gray-400 mb-4">
            MShop is your one-stop shop for the latest products, deals, and offers. We deliver quality products at affordable prices.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="w-5 h-5 text-yellow-400  cursor-pointer" />
            <FaTwitter className="w-5 h-5 text-yellow-400  cursor-pointer" />
            <FaInstagram className="w-5 h-5 text-yellow-400  cursor-pointer" />
            <FaYoutube className="w-5 h-5 text-yellow-400 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick <span className="text-yellow-400">Links</span></h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Column 3 - Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer <span className="text-yellow-400">Service</span></h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-400 cursor-pointer">Help Center</li>
            <li className="hover:text-yellow-400 cursor-pointer">Returns</li>
            <li className="hover:text-yellow-400 cursor-pointer">Shipping Info</li>
            <li className="hover:text-yellow-400 cursor-pointer">Track Order</li>
            <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">News<span className="text-yellow-400">latter</span></h4>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for latest updates and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black bg-white focus:outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MShop. All rights reserved.
      </div>
    </footer>
  );
}
