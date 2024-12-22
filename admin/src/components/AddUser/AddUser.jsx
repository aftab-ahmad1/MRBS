import React from "react";
import "../AddUser/adduser.css";
import { GlobalContext } from "../../pages/GlobalProvider";
import { useContext } from "react";

const AddUser = () => {
  const { addUser, setAddUser } = useContext(GlobalContext);

  return (
    <div className="add__user-form">
      {/* Back Arrow */}
      <span className="back__arrow" onClick={() => setAddUser(false)}>
        &#8592; Back
      </span>

      <h2 className="form__title">Add New User</h2>

      {/* Input Fields */}
      <form>
        <div className="form__group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        {/* <div className="form__group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />
        </div> */}
        <div className="form__group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="form__group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>
        <div className="form__group">
          <label>CNIC</label>
          <input type="text" placeholder="Enter CNIC" />
        </div>
        <div className="form__group">
          <label>Password</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="form__group">
          <label>Confirm Password</label>
          <input type="text" placeholder="confirm password" />
        </div>
        <div className="form__group">
          <label>Address</label>
          <input type="text" placeholder="Enter address" />
        </div>
        <div className="form__group">
          <label>City</label>
          <input type="text" placeholder="Enter city" />
        </div>
        {/* <div className="form__group">
          <label>Country</label>
          <input type="text" placeholder="Enter country" />
        </div> */}
        <div className="form__group justify-center">
          <label>Profile Picture</label>
          <input type="file" accept="image/*" />
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
