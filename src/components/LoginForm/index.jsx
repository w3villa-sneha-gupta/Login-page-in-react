import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
  return (
    <div className="bg-img">
         <div className="content">
            <header>Login Form</header>
            <form action="#">
               <div className="field">
                  <span className="fa fa-user"></span>
                  <input type="text" required placeholder="Email or Phone"/>
               </div>
               <div className="field space">
                  <span className="fa fa-lock"></span>
                  <input type="password" className="pass-key" required placeholder="Password"/>
                  <span className="show">SHOW</span>
               </div>
              
                  <Link to="/forgotPassword"> <div className="pass"><p className='text-white'>Forgot Password?</p> </div></Link>
                 
               <div className="field">
                  <input type="submit" value="LOGIN"/>
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
               <Link to="/signup"><span>Signup Now</span></Link>
               
            </div>
         </div>
      </div>
  )
};

export default LoginForm;
