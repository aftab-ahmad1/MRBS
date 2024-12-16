import { useState, useEffect } from "react";
import { cars } from "../../data/carData";

const CarDetails = () => {
  const [data, setData] = useState(null);

  // Load data on component mount
  useEffect(() => {
    console.log("Loaded Data:", cars);
    setData(cars[0]);
  }, []);

  if (!data) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const { name, price, picture, features, specifications } = data;

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header Section */}
      <div className="mb-6 text-left">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-purple-600 text-xl">${price} / day</p>
      </div>

      {/* Main Section */}
      <div className="flex justify-between mb-6">
        {/* Left Section - Car Image and Thumbnails */}
        <div className="w-1/2 pr-4">
          <img
            src={picture}
            alt={`${name} car`}
            className="w-2/2 rounded-lg shadow-lg"
          />

          {/* Thumbnail Images */}
          <div className="flex space-x-4 mt-4">
            <img
              src={picture}
              alt="Thumbnail 1"
              className="w-1/6 h-16 object-cover rounded-lg shadow-md cursor-pointer"
            />
            <img
              src={picture}
              alt="Thumbnail 2"
              className="w-1/6 h-16 object-cover rounded-lg shadow-md cursor-pointer"
            />
            <img
              src={picture}
              alt="Thumbnail 3"
              className="w-1/6 h-16 object-cover rounded-lg shadow-md cursor-pointer"
            />
          </div>
        </div>

        {/* Right Section - Technical, Button, and Equipment */}
        <div className="w-1/2 flex flex-col">
          {/* Technical Specifications */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm text-center bg-gray-50"
              >
                <p className="font-semibold">{spec.label}</p>
                <p className="text-gray-700">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Rent Button */}
          <div className="text-center mb-6">
            <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 w-full">
              Rent a car
            </button>
          </div>

          {/* Car Equipment */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Car Equipment
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-purple-600">✔</span>
                  <p className="text-gray-700">{feature.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
