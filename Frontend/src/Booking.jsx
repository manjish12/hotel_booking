import React from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  return (
    <div className="booking-container">
      <h1 className="booking-title">Your Bookings</h1>
      <p className="booking-subtitle">Manage your hotel bookings here.</p>
      <div className="booking-list">
        {/* Example booking item */}
        <div className="booking-item">
                    <img className="hotel-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Deluxe Room" />

          <h2>Deluxe Room</h2>
          <p>Check-in: 2023-10-01</p>
          <p>Check-out: 2023-10-05</p>
          <p>Total Price: $600</p>
          <button className="booking-btn">Cancel Booking</button>
        </div>
        <div className="booking-item">
                    <img className="hotel-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Deluxe Room" />

          <h2>Deluxe Room</h2>
          <p>Check-in: 2023-10-01</p>
          <p>Check-out: 2023-10-05</p>
          <p>Total Price: $600</p>
          <button className="booking-btn">Cancel Booking</button>
        </div>
        <div className="booking-item">
                    <img className="hotel-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Deluxe Room" />

          <h2>Deluxe Room</h2>
          <p>Check-in: 2023-10-01</p>
          <p>Check-out: 2023-10-05</p>
          <p>Total Price: $600</p>
          <button className="booking-btn">Cancel Booking</button>
        </div>
        <div className="booking-item">
                    <img className="hotel-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Deluxe Room" />

          <h2>Deluxe Room</h2>
          <p>Check-in: 2023-10-01</p>
          <p>Check-out: 2023-10-05</p>
          <p>Total Price: $600</p>
          <button className="booking-btn">Cancel Booking</button>
        </div>
        {/* Add more booking items as needed */}
      </div>
    </div>
  );
};

export default Booking;
