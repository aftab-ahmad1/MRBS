const CarDetails = ({ data }) => {
  // Debugging the received props
  console.log("CarDetails Component Data:", data);

  // Destructure the data object with proper fallbacks
  const {
    name = "N/A",
    price = "0",
    picture = "placeholder.jpg",
    type = "N/A",
    engine = "N/A",
    seats = "N/A",
    airConditioner = "N/A",
  } = data;

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header Section */}
      <div className="mb-6 text-left">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-purple-600 text-xl">${price} / day</p>
      </div>

      {/* Main Section */}
      <div className="flex justify-between mb-6">
        {/* Left Section - Car Image */}
        <div className="w-1/2 pr-4">
          <img
            src={picture}
            alt={`${name} car`}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Technical Specifications */}
        <div className="w-1/2 flex flex-col">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
              <p className="font-semibold">Type</p>
              <p className="text-gray-700">{type}</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
              <p className="font-semibold">Engine</p>
              <p className="text-gray-700">{engine}</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
              <p className="font-semibold">Seats</p>
              <p className="text-gray-700">{seats}</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
              <p className="font-semibold">Air Conditioner</p>
              <p className="text-gray-700">{airConditioner}</p>
            </div>
          </div>

          {/* Rent Button */}
          <div className="text-center mb-6">
            <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 w-full">
              Rent a car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

// const CarDetails = ({ data }) => {
//   // Destructure the data object with default fallbacks
//   const {
//     name = "N/A",
//     price = "0",
//     picture = "placeholder.jpg",
//     type = "N/A",
//     engine = "N/A",
//     seats = "N/A",
//     airConditioner = "N/A",
//   } = data || {};

//   return (
//     <div className="max-w-6xl mx-auto p-6 font-sans">
//       {/* Header Section */}
//       <div className="mb-6 text-left">
//         <h1 className="text-4xl font-bold">{name}</h1>
//         <p className="text-purple-600 text-xl">${price} / day</p>
//       </div>

//       {/* Main Section */}
//       <div className="flex justify-between mb-6">
//         {/* Left Section - Car Image */}
//         <div className="w-1/2 pr-4">
//           <img
//             src={picture}
//             alt={`${name} car`}
//             className="w-full rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Section - Technical Specifications */}
//         <div className="w-1/2 flex flex-col">
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
//               <p className="font-semibold">Type</p>
//               <p className="text-gray-700">{type}</p>
//             </div>
//             <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
//               <p className="font-semibold">Engine</p>
//               <p className="text-gray-700">{engine}</p>
//             </div>
//             <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
//               <p className="font-semibold">Seats</p>
//               <p className="text-gray-700">{seats}</p>
//             </div>
//             <div className="p-4 border rounded-lg shadow-sm text-center bg-gray-50">
//               <p className="font-semibold">Air Conditioner</p>
//               <p className="text-gray-700">{airConditioner}</p>
//             </div>
//           </div>

//           {/* Rent Button */}
//           <div className="text-center mb-6">
//             <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 w-full">
//               Rent a car
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;
