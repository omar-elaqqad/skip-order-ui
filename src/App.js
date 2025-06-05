import React, { useEffect, useState } from "react";
import SkipList from "./components/SkipList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export default function App() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(2);
  const [selectedSkip, setSelectedSkip] = useState(null);

  // Fetch skip data from API when component loads
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setSkips(data);
        setSelectedSkip(data[0]); // Select first skip by default
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading skip options...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER SECTION */}
      {/* Fixed header to show the current step in the process */}
      <Header currentStep={step} />
      <div className="h-20" />

      {/* MAIN SECTION */}
      {/* Main content area displaying the skip list for user to select */}
      <main className="flex-grow pb-28">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-center mb-2 text-green-700">
            Choose Your Skip Size
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Select the skip size that best suits your needs
          </p>

          {/* List of skip options */}
          <SkipList skips={skips} selectedSkip={selectedSkip} onSelect={setSelectedSkip} />
        </div>
      </main>

      {/* FOOTER SECTION */}
      {/* Footer shows details of selected skip and action buttons to continue or go back */}
      <Footer selectedSkip={selectedSkip} />
    </div>
  );
}
