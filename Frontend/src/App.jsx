import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import Hotel from './Hotel'
import Contact from './Contact'
import Booking from './Booking'
import { MdOutlineLogout } from "react-icons/md";




const App = () => {
  return (
   <BrowserRouter>
  <Navbar />
  <div style={{ marginTop: '60px' }}> 
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookings" element={<Booking />} />
      {/* Default route */}
      <Route path="*" element={<Login />} />
    </Routes>

   </div>
  <Link to="#" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#007bff', color: '#fff', padding: '10px 10px', borderRadius: '5px', textDecoration: 'none' }}>
    <MdOutlineLogout size={24}/>
  </Link>

</BrowserRouter>
  )
}

export default App