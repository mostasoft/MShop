"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log data
    console.log(formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center animate-pulse">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Have questions or suggestions? We'd love to hear from you!
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              Address: 123 MShop Street, Dhaka, Bangladesh
            </p>
            <p className="text-gray-600 mb-4">Email: support@mshop.com</p>
            <p className="text-gray-600 mb-4">Phone: +880 123 456 789</p>
            <p className="text-gray-600 mb-4">
              We are available 24/7 to assist you with your inquiries.
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
