import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import styles from './BuyerAcctLogin.css'


const logo = "http://via.placeholder.com/250x150";
  
  const BuySignUp = () => (
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
                    <GoogleLoginButton href={"/auth/google"} />
                </div>
                <div className='sellerLink'>
                    <a href="SellerAcctLogin">Are you a seller? Click here</a>
                </div>
    </div>
    </div>
  );
  
export default BuySignUp;
