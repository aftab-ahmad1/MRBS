import React from "react";
// import "../styles/userDetails.css";
import "./userdetails.css";

const UserDetails = ({ user, onBack }) => {
  return (
    <div className="user-details">
      <button className="back-button" onClick={onBack}>
        &#8592; Back
      </button>
      <h2>User Details</h2>
      <div className="user-details-wrapper">
      <div className="user-details-content">
        <p><strong>Name :</strong> {user.name}</p>
        <p><strong>Username :</strong> {user.username}</p>
        <p><strong>Email    :</strong> {user.email}</p>
        <p><strong>Phone Number :</strong> {user.phone}</p>
        <p><strong>CNIC :</strong> {user.CNIC}</p>
        <p><strong>Address  :</strong> {user.address}</p>
        <p><strong>City :</strong> {user.city}</p>
      </div>
      <div className="user-details-image">
<img src="" alt="user picture" />
      </div>
      </div>
    </div>
  );
};

export default UserDetails;
