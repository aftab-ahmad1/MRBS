import React from "react";
import "../styles/vehicles.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem.jsx";

const Vehicles = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>

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
            <button className="btn_add_vehicle">ADD</button>
          </div>
        </div>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
