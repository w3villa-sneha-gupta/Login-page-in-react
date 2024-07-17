import React from 'react';
import './index.css';

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
        <button type="submit" className="login-button">
          Login
        </button>
        <div>
            <p>Not a member? <span className='span-element'>Signup now</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
