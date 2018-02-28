import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import axios from 'axios';

const styles = {
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignText: 'center',
    }
    };



const logo = "http://via.placeholder.com/250x150";
  
  const BuySignUp = () => (
    
    <div style={styles.display}><img src={logo}/>
        <h1>Sign Up</h1>
        <FacebookLoginButton onClick={() => alert('Hello')} />
        <GoogleLoginButton href="/auth/google"} />
        <a href="SellerAcctLogin">Are you a seller? Click here</a>
    </div>
  );
  
export default BuySignUp;
