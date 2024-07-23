import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Login = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling form submission
    // Example: You can send login credentials to an API here
  };

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="login-website-logo-mobile-img"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-img"
        alt="website login"
      />
      <form className="form-container" onSubmit={handleSubmit}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            placeholder="Password"
          />
          </div>
          {/* <div class="flex flex-row">
            <div class="flex">
              <div>
            <input type="checkbox"/>
            </div>
            <div>
              <p>Remember me</p>
            </div>
         </div>
           <div>
          <p>Forgot Password?</p>
        </div>
        </div>
        
        
       */}
        <button type="submit" className="login-button">
          Login
        </button>

        <p className='or'>-OR-</p>
        <button type="submit" className="login-gmail-button">
          Login with google
        </button>
        <button type="submit" className="login-gmail-button mt-2 mb-2">
          Login with Facebook
        </button>
        <div>
            <p>Not a member? 
              <Link to="/signup" className="signup-link"><span className='span-element'>Signup now</span></Link>
              </p>
        </div>
        <div>
          <p className='text-primary'>Forgot Password?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
