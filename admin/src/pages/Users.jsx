import React, { useContext, useEffect, useState } from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/users.css";
import axios from "axios";
import { GlobalContext } from "./GlobalProvider";
import AddUser from "../components/AddUser/AddUser";

const Users = () => {
  const [dataArray, setDataArray] = useState([]);
  const { addUser, setAddUser } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/users/get-all?pageNo=1&limit=15"
        );
        console.log("API Response:", response.data);

        // Access the rows array from response.data
        if (response.data && response.data.data && Array.isArray(response.data.data.rows)) {
          setDataArray(response.data.data.rows);
        } else {
          console.error("Invalid API response structure");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        {!addUser ? (
          <>
            <div className="top">
              <h2 className="sell__car-title">Users</h2>
              <button
                className="btn_add_user"
                onClick={() => setAddUser(true)}
              >
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

            {dataArray.map((item, index) => (
              <div key={index} className="user_card">
                <div className="user_card__left">
                  <img src={item.picture} alt="" />
                </div>
                <div className="user_card__right">
                  <div className="user_card__info">
                    <h3>{item.username}</h3>
                    <p>{item.email}</p>
                    <h3>{item.cnic}</h3>
                  </div>
                  <div className="user_card__progress">
                    <button className="btn_user">Edit</button>
                    <button className="btn_user">Delete</button>
                    <button className="btn_user">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <AddUser />
        )}
      </div>
    </div>
  );
};

export default Users;
