"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/image.png")' }} // replace with your image path
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute bg-black/30 inset-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Welcome to MShop
        </h1>
        <p className="text-white text-md md:text-lg mb-6 max-w-xl">
          Discover the best deals on top-quality products. Shop your favorites today!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            Shop Now
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
            Explore Deals
          </button>
        </div>
      </div>
    </section>
  );
}
