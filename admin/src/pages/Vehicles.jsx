import React, { useContext, useEffect, useState } from "react";
import "../styles/vehicles.css";

import CarItem from "../components/UI/CarItem.jsx"; // Your existing CarItem component
import axios from "axios";
import { GlobalContext } from "./GlobalProvider";
import AddVehicle from "../components/AddVehicle/AddVehicle"; // Component to handle adding vehicles
import VehicleDetails from "../components/VehicleDetails/VehicleDetails.jsx";

const Vehicles = () => {
  const { addVehicle, setAddVehicle } = useContext(GlobalContext);

  const [dataArray, setDataArray] = useState([]); // State for fetched vehicles
  const [selectedVehicle, setSelectedVehicle] = useState(null); // State for selected vehicle
  const [showDetails, setShowDetails] = useState(false); // Toggle for details view

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/cars/get-all?pageNo=1&limit=15"
        );
        console.log("API Response:", response.data);

        // Access the rows array from response.data
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.rows)
        ) {
          setDataArray(response.data.data.rows);
        } else {
          console.error("Invalid API response structure");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [addVehicle,selectedVehicle,setSelectedVehicle]);

  const handleCardClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowDetails(true);
  };

  const handleBack = () => {
    setShowDetails(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        {!addVehicle && !showDetails ? (
          <>
            <h2 className="booking__title">Vehicles</h2>

            <div className="filter__widget-wrapper">
              <div className="filter__widget_left">
                <div className="filter__widget-01">
                  <select>
                    <option value="New">New</option>
                    <option value="Popular">Popular</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>

                <div className="filter__widget-01">
                  <select>
                    <option value="toyota">Toyota</option>
                    <option value="bmw">Bmw</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="filter__widget_right">
                <button
                  className="btn_add_vehicle"
                  onClick={() => setAddVehicle(true)}
                >
                  ADD
                </button>
              </div>
            </div>

            <div className="booking__car-list">
              {dataArray?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <CarItem item={item} />
                </div>
              ))}
            </div>
          </>
        ) : addVehicle ? (
          <AddVehicle />
        ) : (
          <VehicleDetails vehicle={selectedVehicle} onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default Vehicles;
