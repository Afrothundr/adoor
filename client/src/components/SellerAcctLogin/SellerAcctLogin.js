import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import '../../pages/gridStyles.css'
import axios from 'axios';

const responseGoogle = () => {
    axios.get('/auth/google');
    //console.log("Response from google: " + response);
};
  
  const SellSignUp = () => (
    <div className='component-wrapper'>
        <div>
            <h1 className='signUp'>Sign Up</h1>
        </div>
        <div className='buttons'>
            <FacebookLoginButton onClick={() => alert('Hello')} />
            <GoogleLoginButton onClick={responseGoogle} />
        </div>
    </div>
  );
  
export default SellSignUp;