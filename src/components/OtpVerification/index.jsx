import React from 'react';
import './index.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const OtpVerification = () => {
  return (
    <div className="bg-img">
         <div className="content">
            <header>Otp Verification</header>
            <form action="#">
               <div className="field">
                  <span className="fa fa-user"></span>
                  <input type="text" required placeholder="Enter OTP"/>
               </div>

            <div className="links">
               <div className="facebook">
               {/* <FontAwesomeIcon icon={faFacebook}/> */}
               <span>Verify OTP</span>
               </div>
               <div className="instagram">
               {/* <FontAwesomeIcon icon={faInstagram} /> */}
               <span>Resend OTP</span>
               </div>
            </div>
              
            </form>
           
         </div>
      </div>
  )
};

export default OtpVerification;
