import { useState } from "react";
import CarCard from "../components/homeComponents/CarCard";
import { cars } from "../data/carData";
import BrandLogos from "../components/contsctUsComponents/BrandLogos";

const Vehicles = () => {
  const [selectedGroup, setSelectedGroup] = useState("All vehicles");
  const vehicleGroups = [
    { name: "All vehicles", icon: "\ud83d\ude97" },
    { name: "Sedan", icon: "\ud83d\ude97" },
    { name: "Cabriolet", icon: "\ud83d\ude97" },
    { name: "Pickup", icon: "\ud83d\ude97" },
    { name: "Suv", icon: "\ud83d\ude97" },
    { name: "Minivan", icon: "\ud83d\ude97" },
  ];
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
        Select a vehicle group
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
        {vehicleGroups.map((group) => (
          <button
            key={group.name}
            onClick={() => setSelectedGroup(group.name)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium border transition-all duration-300 text-sm sm:text-base ${
              selectedGroup === group.name
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span>{group.icon}</span>
            <span>{group.name}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            picture={car.picture}
            name={car.name}
            type={car.type}
            price={car.price}
            features={car.features}
          />
        ))}
      </div>
      <BrandLogos />
    </div>
    // <CarCard/>
  );
};

export default Vehicles;
