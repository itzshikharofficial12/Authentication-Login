import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleSubmit = async(e) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log('Username:', username);
    console.log("Password:", password);
    const response = await fetch("http://localhost:3000/",{
      body: JSON.stringify({username,password}), 
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("Form submitted");
  }
  return (
    <>
    <div className="container">
      <h2 className="heading">Login</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        
        <input type="text" name="username" id="username" placeholder='Enter Username'/>
        <label htmlFor="password">Password</label>
        
        <input type="password" name="password" id="password" placeholder='Password' />
      <button type='submit' className="button">Sign in</button>
      <p>Don't have a account?<a href=''>Sign Up</a></p>
      </form>
    </div>
    </>
  )
}

export default App
