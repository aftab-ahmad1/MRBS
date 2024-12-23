import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarDetails from "../components/detailsComponents/CarDetails";

const Details = () => {
  const { carNo } = useParams(); // Get carNo from the URL
  const [carDetails, setCarDetails] = useState({}); // Initialize as an empty object

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cars/get`, {
          params: { carNo }, // Pass carNo as a query parameter
        });
        console.log("Car Details Response:", response.data); // Debug the API response
        setCarDetails(response.data.data); // Set fetched car details
      } catch (err) {
        console.error("Error fetching car details:", err);
      }
    };

    fetchCarDetails();
  }, [carNo]);

  // Prevent rendering if car details aren't fully loaded yet
  if (!carDetails.name) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="p-8">
      {/* Pass fetched carDetails to CarDetails component */}
      <CarDetails data={carDetails} />
    </div>
  );
};

export default Details;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import CarDetails from "../components/detailsComponents/cardetails"; // Import CarDetails

// const Details = () => {
//   const { carNo } = useParams(); // Get carNo from the URL
//   const [carDetails, setCarDetails] = useState(null);
//   // const [relatedCars, setRelatedCars] = useState([]);

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/cars/get`, {
//           params: { carNo }, // Pass carNo as a query parameter
//         });
//         console.log("Car Details Response:", response.data); // Debug API response
//         setCarDetails(response.data); // Set car details
//       } catch (err) {
//         console.error("Error fetching car details:", err);
//       }
//     };

//     // const fetchRelatedCars = async () => {
//     //   try {
//     //     const response = await axios.get(
//     //       `http://localhost:3001/cars/get-all?pageNo=1&limit=5`
//     //     );
//     //     setRelatedCars(response.data.data.rows); // Set related cars
//     //   } catch (err) {
//     //     console.error("Error fetching related cars:", err);
//     //   }
//     // };

//     fetchCarDetails();
//     // fetchRelatedCars();
//   }, [carNo]);

//   if (!carDetails) {
//     return <div className="text-center mt-10">Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       {/* Pass fetched carDetails as props to CarDetails */}
//       <CarDetails data={carDetails} />

//       {/* Related Cars Section */}
//       {/* <div>
//         <h2 className="text-2xl font-bold mb-4">Related Cars</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {relatedCars.map((car) => (
//             <CarCard
//               key={car.carID}
//               carID={car.carID}
//               name={car.name}
//               type={car.type}
//               price={car.price}
//             />
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Details;
