import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling form submission
    // Example: You can send login credentials to an API here
  };

  return (
    <div className="login-form-container">
         
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
            CREATE PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            placeholder="Create Password"
          />
          </div>
          <div className="input-container">
          <label className="input-label" htmlFor="password">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            placeholder="Confirm Password"
          />
          </div>
        <button type="submit" className="login-button">
          Signup
        </button>
        <div>
            <p>Already have a account?
            <Link to="/" className="signup-link">    
                <span className='span-element'>Login</span>
                </Link></p>
        </div>
        <p className='or'>-OR-</p>
        <button type="submit" className="login-gmail-button">
          Login with google
        </button>
        <button type="submit" className="login-gmail-button mt-2 mb-2">
          Login with Facebook
        </button>
      </form>
    </div>
  );
};

export default Signup;
