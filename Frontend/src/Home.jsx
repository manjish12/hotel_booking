import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { FaArrowRightLong } from "react-icons/fa6";



function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* <img className="home-image" src="hotel.jpg" alt="Hotel" /> */}
      <h1 className="home-title">Welcome to QuickBook.com</h1>
      <p className="home-subtitle">Experience luxury and comfort. Book your stay now!</p>
      <button
        className="home-btn"
        onClick={() => navigate('/hotel')}
      >
Get Started   <FaArrowRightLong size={24}  /></button>
    </div>
  )
}

export default Home