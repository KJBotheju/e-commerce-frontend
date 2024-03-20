import React, { useState } from 'react'
import './CSS/Loginsignup.css'

const Loginsignup = () => {

  const [state,setState] = useState("Login");

  const login = async () => {
    console.log("login fuction executed");
  }

  const signup = async () => {
    console.log("signup fuction executed");
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up"?<input type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
        {state === "Sign Up"?<p className="loginsignup-login">
          Already have an account? <span onClick={()=>{setState('Login')}}>Log In</span>
        </p>:<p className="loginsignup-login">
          Create an account? <span onClick={()=>{setState('Sign Up')}}>Sign Up</span>
        </p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the term of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}

export default Loginsignup
