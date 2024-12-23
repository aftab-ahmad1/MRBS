import { useNavigate } from "react-router-dom";

const CarCard = ({ carNo, name, type, price, picture }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/vehicles/details/${carNo}`); // Navigate with carID in the URL
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Car Image Placeholder */}
      <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={picture || "placeholder.jpg"}
          alt={name}
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

      {/* View Details Button */}
      <button
        className="bg-purple-600 text-white py-2 px-4 rounded-lg w-full transition-colors duration-300 hover:bg-purple-700"
        onClick={handleViewDetails} // Navigate to details page
      >
        View Details
      </button>
    </div>
  );
};

export default CarCard;
