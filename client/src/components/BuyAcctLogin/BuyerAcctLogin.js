import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const styles = {
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignText: 'center',
    }
    };

const responseGoogle = () => {
    axios.get('/auth/google');
        //console.log("Response from google: " + response);
};

const logo = "http://via.placeholder.com/250x150";
  
  const BuySignUp = () => (
    
    <div style={styles.display}><img src={logo}/>
        <h1>Sign Up</h1>
        <FacebookLoginButton onClick={() => alert('Hello')} />
       
        <GoogleLoginButton   
            onClick={ responseGoogle}
             />
        {/* <GoogleLogin
            clientId="786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />, */}
\
        <a href="SellerAcctLogin">Are you a seller? Click here</a>
    </div>
  );
  
export default BuySignUp;
