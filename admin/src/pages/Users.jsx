import React, { useContext, useEffect, useState } from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/users.css";
import axios from "axios";
import { GlobalContext } from "./GlobalProvider";
import AddUser from "../components/AddUser/AddUser";
import UserDetails from "../components/UserDetails/UserDetails"; // Import UserDetails component

const Users = () => {
  const [dataArray, setDataArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // To hold the selected user for details
  const { addUser, setAddUser } = useContext(GlobalContext);
  const baseUrl = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/users/get-all?pageNo=1&limit=15"
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
  }, [addUser, setAddUser]);

  const handleDetails = (user) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:3001/users/delete?username=${e}`)
      .then((response) => {
        console.log("Response:", response.data);
        reFresh();
        alert("User successfully Deleted!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to Delete User");
      });
  };

  const reFresh = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/users/get-all?pageNo=1&limit=15"
      );
      console.log("API Response:", response.data);
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

  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        {!addUser && !selectedUser ? (
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

            {dataArray.map((item, index) => (
              <div key={index} className="user_card">
                <div className="user_card__left">
                  <img src={item.picture} alt="User" />
                </div>
                <div className="user_card__right">
                  <div className="user_card__info">
                    <h3>{item.username}</h3>
                    <p>{item.email}</p>
                    <h3>{item.cnic}</h3>
                  </div>
                  <div className="user_card__progress">
                    <button className="btn_user">Edit</button>
                    <button
                      className="btn_user"
                      onClick={() => handleDelete(item.username)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn_user"
                      onClick={() => handleDetails(item)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : addUser ? (
          <AddUser />
        ) : (
          <UserDetails user={selectedUser} onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default Users;
