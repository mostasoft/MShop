"use client";

import React, { useState, useEffect } from "react";
import { FaHeadset } from "react-icons/fa";

const SupportButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.location.href = "/contact"; // or trigger a chat modal
  };

  return (
    <>
      {visible && (
        <button
          onClick={handleClick}
          className="fixed bottom-10 left-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition z-50 flex items-center gap-2"
          title="Contact Support"
        >
          <FaHeadset className="w-5 h-5" />
          <span className="hidden md:inline font-semibold">Support</span>
        </button>
      )}
    </>
  );
};

export default SupportButton;
