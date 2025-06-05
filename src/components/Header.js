import React from "react";
import {
  FaMapMarkerAlt,
  FaTrash,
  FaDumpster,
  FaClipboardCheck,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

const steps = [
  { label: "Postcode", icon: FaMapMarkerAlt },
  { label: "Waste Type", icon: FaTrash },
  { label: "Select Skip", icon: FaDumpster },
  { label: "Permit Check", icon: FaClipboardCheck },
  { label: "Choose Date", icon: FaCalendarAlt },
  { label: "Payment", icon: FaCreditCard },
];

export default function Header({ currentStep }) {
  return (
    <header className="bg-white shadow py-4 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scrollbar">
        {/* DESKTOP VERSION */}
        <div className="hidden md:flex items-center min-w-[700px]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStep;

            return (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-2 min-w-[100px]">
                  <Icon
                    className={`text-lg ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-sm whitespace-nowrap ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex-grow h-[2px] bg-gray-300 mx-2 self-center" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* MOBILE VERSION */}
        <div className="flex md:hidden items-center justify-between min-w-[600px] relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStep;

            return (
              <div key={step.label} className="relative flex flex-col items-center flex-1 text-center">
                <div
                  className={`w-4 h-4 rounded-full z-10 border-2 ${
                    isActive ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"
                  }`}
                />
                <Icon
                  className={`text-sm mt-2 ${
                    isActive ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-xs mt-1 whitespace-nowrap ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>

                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-2 left-1/2 right-[-50%] h-1 ${
                      index < currentStep ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
