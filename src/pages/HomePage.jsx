import CarCard from "../components/homeComponents/CarCard";
import DownloadAppSection from "../components/homeComponents/DownloadAppSection";
import FactsSection from "../components/homeComponents/FactsStation";
import Features from "../components/homeComponents/Features";
import HeroSearchSection from "../components/homeComponents/HeroSearchSection";
import { cars } from "../data/carData";
import Booking from "../components/homeComponents/Booking";

const HomePage = () => {
  return (
    <>
      <Booking />
      <Features />

      {/* =================================================================== */}

      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl tracking-wide font-bold">
            Choose the car that suits you
          </h1>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300">
            View All
          </button>
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
      </div>

      {/* =================================================================== */}

      <FactsSection />
      <DownloadAppSection />
      <HeroSearchSection />
    </>
  );
};

export default HomePage;
