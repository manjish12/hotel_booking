import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">We'd love to hear from you!</p>
      <form className="contact-form">
        <input type="text" id="name" placeholder="Your Name" className="contact-input" required />
        <input type="email"id='email' placeholder="Your Email" className="contact-input" required />
        <textarea placeholder="Your Message" id='message' className="contact-textarea" required></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
      </div >
        
  )
}

export default Contact