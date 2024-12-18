import CarDetails from "../components/detailsComponents/cardetails";
import CarCard from "../components/homeComponents/CarCard";
import { cars } from "../data/carData";

const Details = () => {
  return (
    <>
      <CarDetails />
      <>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Related Cars
        </h1>
      </>
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
    </>
  );
};

export default Details;
