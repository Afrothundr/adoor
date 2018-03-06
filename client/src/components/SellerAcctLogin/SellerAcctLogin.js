import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import '../../pages/gridStyles.css'



const logo = "http://via.placeholder.com/250x150";
  
  const SellSignUp = () => (
    <div className='sellwrapper'>
        <div className='header'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    <div className='signUp'>
        <h1>Sign Up</h1>
    </div>
        <div className='buttons'>
        <FacebookLoginButton onClick={() => alert('Hello')} />
        <GoogleLoginButton onClick={() => alert('Hello')} />
        </div>
    </div>
  );
  
export default SellSignUp;