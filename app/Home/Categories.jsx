"use client";
import React from "react";
import { FaTshirt, FaLaptop, FaMobileAlt, FaCouch } from "react-icons/fa";

export default function CategoriesSection() {
  const categories = [
    {
      icon: <FaTshirt className="w-12 h-12 text-yellow-400" />,
      title: "Fashion",
    },
    {
      icon: <FaLaptop className="w-12 h-12 text-yellow-400" />,
      title: "Electronics",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-yellow-400" />,
      title: "Mobile & Accessories",
    },
    {
      icon: <FaCouch className="w-12 h-12 text-yellow-400" />,
      title: "Home & Living",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Top Category Of This Month
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-center">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
