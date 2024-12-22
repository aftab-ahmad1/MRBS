import React, { useContext, useEffect, useState } from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/users.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import axios from "axios";
import { GlobalContext } from "./GlobalProvider";
import AddUser from "../components/AddUser/AddUser";

const Users = () => {
  const [dataArray, setDataArray] = useState([]);
  const { addUser, setAddUser } = useContext(GlobalContext);
  if (addUser) {
    // console.log("addUser  is true") ;
    // alert("addUser  is true");
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("localhost:3000/users/get-all");
  //     setDataArray(response.data);
  //     console.log(response);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
    <div className="sell__car">
      <div className="sell__car-wrapper">
      {!addUser ? (
        <>
        <div className="top">
          <h2 className="sell__car-title">Users</h2>
          <button className="btn_add_user" onClick={() => setAddUser(true)}>
            ADD
          </button>
        </div>
      


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
        </>
        ) : (<AddUser />)}
      </div>
    </div>
    </>
  );
};

export default Users;
