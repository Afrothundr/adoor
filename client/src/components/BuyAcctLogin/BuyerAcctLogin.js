import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import axios from 'axios';
import "./BuyerAcctLogin.css"

const responseGoogle = () => {
    axios.get('/auth/google');
    //console.log("Response from google: " + response);
};

const BuySignUp = () => (
    <div className='component-wrapper'>
        <div>
            <h1 className='signUp'>Account Login</h1>
            <hr/>
        </div>
        <div className='buttons'>
            <FacebookLoginButton onClick={() => alert('Hello')} />
            <GoogleLoginButton onClick={responseGoogle} />
        </div>
    </div>

);

export default BuySignUp;
