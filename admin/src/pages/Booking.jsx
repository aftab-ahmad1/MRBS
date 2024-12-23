import React, { useEffect, useState } from "react";
import "../styles/bookingDetails.css"; // Add CSS for styling
import axios from "axios";

const Booking = () => {
  const [bookings, setBookings] = useState([]); // State to store booking data

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bookings/get-all"); // Update endpoint
        console.log("Booking Data:", response.data);

        // Assuming the response has a `data` array of bookings
        if (response.data && Array.isArray(response.data.data)) {
          setBookings(response.data.data);
        } else {
          console.error("Invalid booking data structure");
        }
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="booking-details">
      <h2 className="booking-title">Booking Details</h2>

      <div className="booking-list">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <div className="booking-info">
                <p>
                  <strong>Booking ID:</strong> {booking.id}
                </p>
                <p>
                  <strong>User:</strong> {booking.userName || "N/A"}
                </p>
                <p>
                  <strong>Vehicle:</strong> {booking.vehicleName || "N/A"}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      booking.status === "Booked"
                        ? "status-booked"
                        : "status-canceled"
                    }
                  >
                    {booking.status}
                  </span>
                </p>
                <p>
                  <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-bookings">No bookings available</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
