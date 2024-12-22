import React, { useEffect, useState } from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/sell-car.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
//import axios from "axios";

const Users = () => {
  const [dataArray, setDataArray] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("localhost:3000/users/get-all");
  //     setDataArray(response.data);
  //     console.log(response);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Users</h2>

        <div className="columns">
          <div className="user_card__info">
            <h3>ProfilePic</h3>
            <h3>UserName</h3>
            <h3>Email</h3>
            <h3>CNIC</h3>
          </div>
        </div>

        <div className="user_card">
          <div className="user_card__left">
            <img src={sellCar} alt="" />
          </div>
          <div className="user_card__right">
            <div className="user_card__info">
              <h3>UserName</h3>
              <p>Email</p>
              <h3>CNIC</h3>
            </div>
            <div className="user_card__progress">
              <button className="btn_user">Edit</button>
              <button className="btn_user">Delete</button>
              <button className="btn_user">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
