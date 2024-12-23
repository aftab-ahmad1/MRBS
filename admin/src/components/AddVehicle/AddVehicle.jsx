import React, { useContext, useState } from "react";
import "./addvehicle.css";
import axios from "axios";
import { GlobalContext } from "../../pages/GlobalProvider";

const AddVehicle = () => {
  const { setAddVehicle } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    type: "",
    model: "",
    carNo: "",
    engine: "",
    gearBox: "",
    fuel: "",
    seats: "",
    airConditioner: "",
    price: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const create = (e) => {
    e.preventDefault(); 

    axios
      .post("http://localhost:3001/cars/create", formData)
      .then((response) => {
        console.log("Response:", response.data);
        alert("User created successfully!");
        setAddVehicle(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to create user.");
      });
  };


  return (
    <div className="add-vehicle">
      <button className="back-button" onClick={()=>setAddVehicle (false)}>
        &#8592; Back
      </button>
      <h2 className="form-title">Add New Vehicle</h2>
      <form onSubmit={create}>
        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter vehicle name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Enter vehicle brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input
              type="text"
              name="type"
              placeholder="Enter type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              placeholder="Enter car model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CarNo</label>
            <input
              type="text"
              name="carNo"
              placeholder="Enter car no"
              value={formData.carNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Engine</label>
            <input
              type="text"
              name="engine"
              placeholder="Enter engin type"
              value={formData.engine}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>GearBox</label>
            <input
              type="text"
              name="gearBox"
              placeholder="Enter gearbox type"
              value={formData.gearBox}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fuel type</label>
            <input
              type="text"
              name="fuel"
              placeholder="Enter fuel type"
              value={formData.fuel}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Seating Capacity</label>
            <input
              type="number"
              name="seats"
              placeholder="Enter seating capacity"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Air Conditioner</label>
            <input
              type="text"
              name="airConditioner"
              placeholder="Enter air conditioner (yes/no)"
              value={formData.airConditioner}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price Per Day</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price per day"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group">
              <label>Picture</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div> */}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
