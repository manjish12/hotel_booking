import React from 'react'
import './Hotel.css'
import { useNavigate } from 'react-router-dom'

const Hotel = () => {
  return (
    <div className="hotel-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <h1 className="hotel-title">Hotel Details</h1>
        <button className="hotel-btn" style={{ fontSize: '1.5rem', padding: '4px 16px', marginLeft: 'auto' }}>+</button>
      </div>
      <div style={{ margin: '16px 0', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 500 }}>Filter:</span>
        <button className="hotel-btn" style={{ background: '#1565c0', padding: '6px 18px', fontSize: '1rem' }}>Deluxe</button>
        <button className="hotel-btn" style={{ background: '#1976d2', padding: '6px 18px', fontSize: '1rem' }}>Suite</button>
        <button className="hotel-btn" style={{ background: '#1976d2', padding: '6px 18px', fontSize: '1rem' }}>Family</button>
        <select className="hotel-btn" style={{ background: '#1976d2', color: '#fff', fontWeight: 500 }}>
          <option>Location</option>
   
        </select>
        <select className="hotel-btn" style={{ background: '#1976d2', color: '#fff', fontWeight: 500 }}>
          <option>Country</option>
         
        </select>
        <button className="hotel-btn" style={{ background: '#888', marginLeft: 8 }}>Reset</button>
      </div>
      <div className="hotel-list" style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
        <div className="hotel-card">
          <img className="hotel-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Deluxe Room" />
          <div className="hotel-name">Deluxe Room</div>
          <div className="hotel-location">5th Floor, Ocean View</div>
          <div className="hotel-location">USA</div>
          <div className="hotel-price" style={{ color: '#388e3c', fontWeight: 600 }}>$120/night</div>
          <button className="hotel-btn">Book Now</button>
        </div>
        <div className="hotel-card">
          <img className="hotel-image" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt="Suite" />
          <div className="hotel-name">Suite</div>
          <div className="hotel-location">10th Floor, City View</div>
          <div className="hotel-location">France</div>
          <div className="hotel-price" style={{ color: '#388e3c', fontWeight: 600 }}>$220/night</div>
          <button className="hotel-btn">Book Now</button>
        </div>
        <div className="hotel-card">
          <img className="hotel-image" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Family Room" />
          <div className="hotel-name">Family Room</div>
          <div className="hotel-location">3rd Floor, Garden View</div>
          <div className="hotel-location">India</div>
          <div className="hotel-price" style={{ color: '#388e3c', fontWeight: 600 }}>$180/night</div>
          <button className="hotel-btn">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hotel