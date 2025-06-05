import React from "react";
import { FaArrowRight } from "react-icons/fa";
export default function Footer({ selectedSkip }) {
  if (!selectedSkip) return null;

  const { size, hire_period_days, price_before_vat, vat } = selectedSkip;
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t px-4 py-3 shadow-md z-50">
      {/* DISCLAIMER */}
      <p className="text-xs text-gray-500 text-center mb-2 sm:mb-3 px-2">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </p>

      {/* Footer content: skip info and buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 max-w-6xl mx-auto">
        {/* Skip info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left">
          <span className="text-black font-semibold text-base">{size} Yard Skip</span>
          <span className="text-blue-700 font-semibold text-lg">£{totalPrice.toFixed(2)}</span>
          <span className="text-gray-600 text-sm">{hire_period_days} Day Hire</span>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 justify-center">
          <button className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700">
            Back
          </button>
          <button className="bg-green-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-green-700">
            Continue <FaArrowRight />
          </button>
        </div>
      </div>
    </footer>
  );
}
