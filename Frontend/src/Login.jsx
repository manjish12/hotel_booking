import React from 'react'
import './Login.css'
import Register from './Register'   


const Login = () => {
  return (
    <form className='login-form'>
        <h1>Log Into QuickBook.com</h1>
              {/* <p>Please fill out the form to login.</p> */}
        <label htmlFor="Username">Username: </label>
        <input type="text" id='Username' placeholder='Username' required />
        
        <label htmlFor="Password">Password: </label>
        <input type="password" id='Password' placeholder='Password' required />          
        <button className='btn-submit'>Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
    </form>
  )
}

export default Login