import React from 'react'
import './Register.css'
import Login from './Login'
const Register = () => {
  return (
    
    <form className='register-form'>
        <h1>Welcome to the Registration Page</h1>
              {/* <p>Please fill out the form to register.</p> */}
        <label htmlFor="Username">Username: </label>
        <input type="text" id='Username' placeholder='Username' required />
        <label htmlFor="Email">Email: </label>
        <input type="email" id='Email' placeholder='Email' required/>
        <label htmlFor="Password">Password: </label>
        <input type="password" id='Password' placeholder='Password' required/>          
        {/* <label htmlFor="ConfirmPassword">Confirm Password: </label>
        <input type="password" id='ConfirmPassword' placeholder='Confirm Password' /> */}

        <button className='btn-submit'>Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
    </form>
  )
}

export default Register