import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './BuyerAcctLogin.css';

const styles = {
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignText: 'center'
    }
};

const responseGoogle = () => {
    // axios.get("/auth/google");
    fetch("/auth/google", {
        method: "GET",
        headers: {
            "Content-Type": "text/plain"
        }});
};



const logo = "http://via.placeholder.com/250x150";
  
  const BuySignUp = () => (

    
    <div style={styles.display}><img src={logo}/>
        <h1>Sign Up</h1>
        <FacebookLoginButton onClick={() => alert('Hello')} />
       
        <GoogleLoginButton   
            href={ responseGoogle}
             />
        {/* <GoogleLogin
            clientId="786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />, */}
\
        <a href="SellerAcctLogin">Are you a seller? Click here</a>
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
                    <GoogleLoginButton onClick={responseGoogle} />
                    {/* <GoogleLogin
                        clientId="786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                     /> */}
                </div>
                <div className='sellerLink'>
                    <a href="SellerAcctLogin">Are you a seller? Click here</a>
                </div>
    </div>
    </div>
    </div>
  );
  
export default BuySignUp;
