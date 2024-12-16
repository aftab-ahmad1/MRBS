import React, { useState } from "react";

const HeroSearchSection = () => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a city to search.");
    } else {
      alert(`Searching for cars in ${city}`);
    }
  };

  return (
    <div className="bg-indigo-600 text-white py-16 px-6 rounded-lg relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Enjoy every mile with <br /> adorable companionship.
          </h1>
          <p className="text-gray-200 mb-6">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat.
          </p>
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg w-full max-w-md">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-grow py-3 px-4 text-gray-800 outline-none placeholder-gray-500"
            />
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Content (Car Illustration) */}
        <div className="hidden lg:block">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/035/915/849/small/ai-generated-car-logo-isolated-no-background-ai-generated-free-png.png"
            alt="Car Illustration"
            className="w-full  opacity-100"
          />
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute inset-0">
        <img
          src="https://e7.pngegg.com/pngimages/830/38/png-clipart-world-map-illustration-world-map-dot-distribution-map-beautiful-world-map-miscellaneous-world-thumbnail.png"
          alt="Background Graphic"
          className="w-full h-full object-cover blur-sm opacity-20"
        />
      </div>
    </div>
  );
};

export default HeroSearchSection;
