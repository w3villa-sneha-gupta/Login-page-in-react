import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  return (
    <div className="bg-img">
         <div className="content">
            <header>Sign Up </header>
            <form action="#">
               <div className="field">
                  <span className="fa fa-user"></span>
                  <input type="text" required placeholder="Email or Phone"/>
               </div>
               <div className="field space">
                  <span className="fa fa-lock"></span>
                  <input type="password" className="pass-key" required placeholder="Create Password"/>
                  <span className="show">SHOW</span>
               </div>
               <div className="field space mb-3">
                  <span className="fa fa-lock"></span>
                  <input type="password" className="pass-key" required placeholder="Confirm Password"/>
                  <span className="show">SHOW</span>
               </div>
               <div className="field">
                  <input type="submit" value="Sign Up"/>
               </div>
            </form>
            <div className="login">
               Or login with
            </div>
            <div className="links">
               <div className="facebook">
               {/* <FontAwesomeIcon icon={faFacebook}/> */}
               <span>Facebook</span>
               </div>
               <div className="instagram">
               {/* <FontAwesomeIcon icon={faInstagram} /> */}
               <span>Instagram</span>
               </div>
            </div>
            <div className="signup">
               Don't have account?
               <Link to="/"><span>Login Now</span></Link>
               
            </div>
         </div>
      </div>
  )
};

export default Signup;
