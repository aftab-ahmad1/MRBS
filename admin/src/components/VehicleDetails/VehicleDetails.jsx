import React from "react";
import "./vehicledetails.css";
import axios from "axios";

const VehicleDetails = ({ vehicle, onBack}) => {
    const handleDelete = (e) => {
        axios
          .delete(`http://localhost:3001/cars/delete?carNo=${e}`)
          .then((response) => {
            console.log("Response:", response.data);
            // reFresh();
            alert("Vehicle successfully Deleted!");
            onBack();
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Failed to Delete Vehicle");
          });
      };
  return (
    <div className="vehicle-details">
      <button className="back-button" onClick={onBack}>
        &#8592; Back
      </button>
      <h2 className="details-title">Vehicle Details</h2>
      <div className="details-container">
        <div className="details-group">
          <label>Name:</label>
          <p>{vehicle.name}</p>
        </div>
        <div className="details-group">
          <label>Brand:</label>
          <p>{vehicle.brand}</p>
        </div>
        <div className="details-group">
          <label>Type:</label>
          <p>{vehicle.type}</p>
        </div>
        <div className="details-group">
          <label>Model:</label>
          <p>{vehicle.model}</p>
        </div>
        <div className="details-group">
          <label>carNo:</label>
          <p>{vehicle.carNo}</p>
        </div>
        <div className="details-group">
          <label>Engine:</label>
          <p>{vehicle.engine}</p>
        </div>
        <div className="details-group">
          <label>Gearbox:</label>
          <p>{vehicle.gearBox}</p>
        </div>
        <div className="details-group">
          <label>Fuel:</label>
          <p>{vehicle.fuel}</p>
        </div>
        <div className="details-group">
          <label>Seats:</label>
          <p>{vehicle.seats}</p>
        </div>
        <div className="details-group">
          <label>Air Conditioner:</label>
          <p>{vehicle.sirConditioner}</p>
        </div>
        <div className="details-group">
          <label>Price Per Day:</label>
          <p>${vehicle.price}/day</p>
        </div>
        <div className="details-group">
          <label>Picture:</label>
          <img
            src={vehicle.picture || "https://via.placeholder.com/150"}
            alt="Vehicle"
          />
        </div>
      </div>
      <div className="actions-container">
        <button className="btn-action btn-edit">
          Edit
        </button>
        <button
          className="btn-action btn-delete" onClick={()=>handleDelete(vehicle.carNo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default VehicleDetails;
