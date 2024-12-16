import React from "react";

const CarCard = ({ picture,name, type, price, features }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Car Image Placeholder */}
      <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={picture}
          alt="Car"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Car Details */}
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{type}</p>
      <div className="flex justify-between items-center my-2">
        <span className="text-purple-600 font-semibold">${price}</span>
        <span className="text-sm text-gray-500">per day</span>
      </div>

      {/* Features */}
      <div className="text-sm text-gray-500 flex flex-wrap gap-2 mb-4">
        {features.map((feature, index) => (
          <span key={index} className="flex items-center gap-1">
            {feature.icon} {feature.label}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <button className="bg-purple-600 text-white py-2 px-4 rounded-lg w-full transition-colors duration-300 hover:bg-purple-700">
        View Details
      </button>
    </div>
  );
};

export default CarCard;
