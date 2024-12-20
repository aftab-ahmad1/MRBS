import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Booking from "../pages/Booking";
import Vehicles from "../pages/Vehicles";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default Router;
