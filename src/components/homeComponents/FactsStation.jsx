import React from "react";

const factsData = [
  {
    icon: "🚗", // You can replace these with actual icons from a library like Font Awesome or Heroicons
    number: "540+",
    label: "Cars",
  },
  {
    icon: "👥",
    number: "20k+",
    label: "Customers",
  },
  {
    icon: "⏳",
    number: "25+",
    label: "Years",
  },
  {
    icon: "📏",
    number: "20m+",
    label: "Miles",
  },
];

const FactsSection = () => {
  return (
    <div className="bg-indigo-600 text-white py-12 px-6 rounded-lg">
      <div className="max-w-6xl mx-auto text-center flex flex-col">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4">Facts In Numbers</h2>
        <p className="text-gray-100 mb-8 w-3/5 self-center ">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
          fermentum.
        </p>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-14">
          {factsData.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col  bg-white rounded-xl 
              shadow-lg p-3 text-center transform transition-transform hover:scale-105 border-2 border-gray-200
              
              "
            >
              {/* Icon */}
              <div className="text-yellow-500 text-4xl mb-4">{fact.icon}</div>
              {/* Number */}
              <h3 className="text-2xl font-bold text-gray-800">
                {fact.number}
              </h3>
              {/* Label */}
              <p className="text-gray-500">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
