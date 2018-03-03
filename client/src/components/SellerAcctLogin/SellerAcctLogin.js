import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import styles from './SellerAcctLogin.js';



const logo = "http://via.placeholder.com/250x150";
  
  const SellSignUp = () => (
    <div className={styles}>
    <div className='wrapper'>
        <div className='header'>
            <img src={logo} alt=""/>
        </div>
    <div className='signUp'>
        <h1>Sign Up</h1>
    </div>
        <div className='buttons'>
        <FacebookLoginButton onClick={() => alert('Hello')} />
        <GoogleLoginButton onClick={() => alert('Hello')} />
        </div>
    </div>
    </div>
  );
  
export default SellSignUp;