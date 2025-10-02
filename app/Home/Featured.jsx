"use client";
import React from "react";
import { FaTruck, FaHeadset, FaShieldAlt, FaGift } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaTruck className="w-8 h-8 text-yellow-400" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above $50.",
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-yellow-400" />,
      title: "24/7 Support",
      description: "Our support team is here to help you anytime.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-yellow-400" />,
      title: "Secure Payment",
      description: "We ensure secure payment for every transaction.",
    },
    {
      icon: <FaGift className="w-8 h-8 text-yellow-400" />,
      title: "Special Offers",
      description: "Get amazing discounts and exclusive deals every week.",
    },
  ];

  return (
    <section className="py-10 px-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-yellow-400 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
