"use client";
import { useState } from "react";
import {
  FaRegUser,
  FaRegHeart,
  FaHome,
  FaCartArrowDown,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="w-full bg-yellow-400 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center rounded-sm bg-black p-1">
            <span className="text-2xl font-bold text-yellow-500">M</span>
            <span className="text-2xl font-bold text-white px-1">Shop</span>
          </div>

          {/* Desktop Top Right & Search (hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-4xl mx-6 items-center">
            {/* Search Bar */}
            <div className="flex flex-1">
              {/* Category Dropdown */}
              <div className="flex items-center bg-gray-100 border border-gray-300 px-3 rounded-l-md text-gray-700 text-sm cursor-pointer">
                <span>All</span>
                <IoMdArrowDropdown className="ml-1" />
              </div>
              <input
                type="text"
                placeholder="I'm shopping for..."
                className="flex-1 px-3 bg-white py-2 border-t border-b border-gray-300 outline-none text-sm"
              />
              <button className="bg-black text-white px-6 rounded-r-md hover:bg-gray-800 text-sm">
                Search
              </button>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-5 text-gray-800 ml-6">
              <FaRegHeart className="w-5 h-5 cursor-pointer hover:text-black" />
              <IoCartOutline className="w-6 h-6 cursor-pointer hover:text-black" />
              <FaRegUser className="w-5 h-5 cursor-pointer hover:text-black" />
              <button className="text-sm font-medium hover:underline">
                Login / Register
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl font-bold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4">
            {/* Search Bar */}
            <div className="flex w-full">
              <div className="flex items-center bg-gray-100 border border-gray-300 px-3 rounded-l-md text-gray-700 text-sm cursor-pointer">
                <span>All</span>
                <IoMdArrowDropdown className="ml-1" />
              </div>
              <input
                type="text"
                placeholder="I'm shopping for..."
                className="flex-1 px-3 bg-white py-2 border-t border-b border-gray-300 outline-none text-sm"
              />
              <button className="bg-black text-white px-4 rounded-r-md hover:bg-gray-800 text-sm">
                Search
              </button>
            </div>

            {/* Center Menu */}
            <ul className="flex flex-col space-y-2 text-gray-800 font-medium">
              <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                <FaHome /> Home
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                <FaCartArrowDown /> Shop
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                <RiContactsBook3Fill /> Contact
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                <PiNewspaperClippingDuotone /> Blog
              </li>
            </ul>

            {/* Right Menu */}
            <ul className="flex flex-col space-y-2 text-gray-800 font-medium mt-4">
              <li className="cursor-pointer hover:text-black">
                Sell on M<span className="font-bold text-white">Shop</span>
              </li>
              <li className="cursor-pointer hover:text-black">Track Your Order</li>
              <li className="cursor-pointer hover:text-black">US Dollar</li>
              <li className="cursor-pointer hover:text-black">English</li>
              <li className="cursor-pointer hover:text-black">Login / Register</li>
            </ul>
          </div>
        )}
      </div>

      {/* Second Nav Bar (desktop only) */}
      <nav className="w-full bg-yellow-400 border-b border-gray-300 hidden md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left Button */}
          <div className="flex items-center bg-black text-white px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-gray-900">
            All Categories
            <IoMdArrowDropdown className="ml-2" />
          </div>

          {/* Center Menu */}
          <ul className="flex items-center space-x-8 text-sm font-medium text-gray-800">
            <li className="cursor-pointer flex items-center gap-1 hover:text-black">
              <FaHome /> Home
            </li>
            <li className="cursor-pointer flex items-center gap-1 hover:text-black">
              <FaCartArrowDown /> Shop
            </li>
            <li className="cursor-pointer flex items-center gap-1 hover:text-black">
              <RiContactsBook3Fill /> Contact
            </li>
            <li className="cursor-pointer flex items-center gap-1 hover:text-black">
              <PiNewspaperClippingDuotone /> Blog
            </li>
          </ul>

          {/* Right Menu */}
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-800">
            <li className="cursor-pointer hover:text-black">
              Sell on M<span className="font-bold text-white">Shop</span>
            </li>
            <li className="cursor-pointer hover:text-black">Track Your Order</li>
            <li className="cursor-pointer hover:text-black">US Dollar</li>
            <li className="cursor-pointer hover:text-black">English</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
