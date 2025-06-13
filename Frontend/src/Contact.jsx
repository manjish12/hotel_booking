import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-info">
        For inquiries, please email us at: <a href="mailto:chaulagainmanjish12@gmail.com">Mail</a>
      </p>
      <p className="contact-info">
        Or call us at: <a href="tel:+1234567890">+1 234 567 890</a>
      </p>
    </div>
  )
}

export default Contact