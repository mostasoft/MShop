"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const blogs = [
  {
    title: "Top 10 Must-Have Gadgets in 2025",
    excerpt:
      "Discover the latest tech that will make your life easier and more fun.",
    img: "/Top 10 Must-Have Gadgets in 2025.jpg",
    link: "#",
  },
  {
    title: "How to Style Your Home Office",
    excerpt:
      "Make your workspace both productive and beautiful with these tips.",
    img: "/How to Style Your Home Office (2).jpg",
    link: "#",
  },
  {
    title: "Eco-Friendly Products You’ll Love",
    excerpt: "Sustainable and stylish products that make a difference.",
    img: "/Eco-Friendly Products.jpg",
    link: "#",
  },
  {
    title: "Summer Fashion Trends 2025",
    excerpt: "Stay ahead of the curve with these must-have fashion pieces.",
    img: "/blog.jpg",
    link: "#",
  },
];

const FixedBlogCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % blogs.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4 animate-pulse">
          MShop Blog
        </h2>
        <p className="text-gray-600">
          Stay updated with the latest trends, tips, and product highlights.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {blogs.map((blog, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-yellow-500 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a
                    href={blog.link}
                    className="inline-flex items-center text-yellow-500 font-semibold hover:underline transition"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition z-20"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition z-20"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {blogs.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === current ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default FixedBlogCarousel;
