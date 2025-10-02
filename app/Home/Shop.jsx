"use client";
import React, { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

export default function DealOfTheDayAdvanced() {
  const allProducts = [
    {
      image: "/Wareless Headphone.jpg",
      title: "Wireless Headphones",
      category: "Electronics",
      price: 79,
    },
    {
      image: "/Smart Watch.jpg",
      title: "Smart Watch",
      category: "Wearables",
      price: 99,
    },
    {
      image: "/Gaming Mouse.jpg",
      title: "Gaming Mouse",
      category: "Gaming",
      price: 39,
    },
    {
      image: "/Bluetooth Speaker.jpg",
      title: "Bluetooth Speaker",
      category: "Audio",
      price: 49,
    },
    {
      image: "/Laptop Stand.jpg",
      title: "Laptop Stand",
      category: "Accessories",
      price: 29,
    },
    {
      image: "/Eco-Friendly Products.jpg",
      title: "Wireless Charger",
      category: "Electronics",
      price: 25,
    },
    {
      image: "/Smart Glasses.jpg",
      title: "Smart Glasses",
      category: "Wearables",
      price: 120,
    },
    {
      image: "/Mechanical Keyboard.jpg",
      title: "Mechanical Keyboard",
      category: "Gaming",
      price: 85,
    },
  ];

  // Repeat products 3 times for demo
  const products = [...allProducts, ...allProducts, ...allProducts];

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = filterCategory === "All" || product.category === filterCategory;
    return matchSearch && matchCategory;
  });

  const categories = ["All", "Electronics", "Wearables", "Gaming", "Audio", "Accessories"];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Deal of the Day</h2>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-600 text-lg" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animation: `fadeIn 0.5s ease forwards ${index * 0.1}s` }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-red-500 font-bold mb-4">${product.price}</p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
