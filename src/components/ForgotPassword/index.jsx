import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ForgotPassword = () => {
  return (
    <div className="bg-img">
         <div className="content">
            <header>Reset Password</header>
            <form action="#">
               <div className="field">
                  <span className="fa fa-user"></span>
                  <input type="text" required placeholder="Email or Phone"/>
               </div>
              
               <div className="field mt-4">
                  <input type="submit" value="Send Reset Link"/>
               </div>
               <div className="pass">
                  <p className='text-white'>Remembered?  
                    <Link to='/'><span className='text-primary'>  Login Now</span></Link></p>
               </div>
            </form>
           </div>
      </div>
  )
};

export default ForgotPassword;
