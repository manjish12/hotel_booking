import React from 'react'
import './Navbar.css'
import { FaUser } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";


const Navbar = () => {
  return (
   <nav>
    <div className='Logo'>QuickBook.com</div>
    <div className='Links'><a href="./Home">Home</a>
    <a href="./Hotel">Hotels</a>
    {/* <a href="#">About</a> */}
    <a href="./Contact">Contact</a>
    </div>
    {/* <div className='auth-links'>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div> */}
    <div className="icons">
        <a href="/profile" className="profile-icon">
            <FaUser size={24} />
        </a>
        <a href="/bookings" className="booking-icon">
        <MdLocalHotel size={24} /></a>
            
        
    </div>
   </nav>
  )
}

export default Navbar