import React, { useState, useContext } from "react";
import "../AddUser/adduser.css";
import { GlobalContext } from "../../pages/GlobalProvider";
import axios from "axios";

const AddUser = () => {
  const { setAddUser } = useContext(GlobalContext);

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
    CNIC: "",
    phoneNo: "",
    address: "",
    city: "",
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission
  const create = (e) => {
    e.preventDefault(); // Prevent default form behavior

    axios
      .post("http://localhost:3001/users/create", data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("User created successfully!");
        setAddUser(false); // Navigate back or close the form
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to create user.");
      });
  };

  return (
    <div className="add__user-form">
      {/* Back Arrow */}
      <span className="back__arrow" onClick={() => setAddUser(false)}>
        &#8592; Back
      </span>

      <h2 className="form__title">Add New User</h2>

      {/* Input Fields */}
      <form onSubmit={create}>
        <div className="form__group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNo"
            placeholder="Enter phone number"
            value={data.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label>CNIC</label>
          <input
            type="text"
            name="CNIC"
            placeholder="Enter CNIC"
            value={data.CNIC}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form__group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div> */}
        <div className="form__group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={data.address}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={data.city}
            onChange={handleChange}
          />
        </div>
        {/* Submit Button */}
        <button className="submit__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
