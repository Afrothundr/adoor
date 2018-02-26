import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';

const styles = {
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignText: 'center',
    }
    };

const logo = "http://via.placeholder.com/250x150";
  
  const SellSignUp = () => (
    <div style={styles.display}><img src={logo}/>
        <h1>Sign Up</h1>
        <FacebookLoginButton onClick={() => alert('Hello')} />
        <GoogleLoginButton onClick={() => alert('Hello')} />
    </div>
  );
  
export default SellSignUp;