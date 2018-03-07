import React from 'react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import '../../pages/gridStyles.css';

const styles = {
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignText: 'center'
    }
};

const responseGoogle = () => {
    axios.get("/auth/google");
    // fetch("/auth/google", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "text/plain"
    //     }});
};

const responseFacebook = () => {
    axios.get("http://localhost:3001/auth/facebook");
    // fetch("/auth/google", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "text/plain"
    //     }});
};



// const logo = "http://via.placeholder.com/250x150";

const BuySignUp = () => (

    // <div style={styles.display}> />
    //     <h1>Sign Up</h1>
    //     <FacebookLoginButton onClick={() => alert('Hello')} />

    //     <GoogleLoginButton
    //         onClick={responseGoogle}
    //     />
        // {/* <GoogleLogin
        //     clientId="786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com"
        //     buttonText="Login"
        //     onSuccess={responseGoogle}
        //     onFailure={responseGoogle}
        // />, */}
    //     \
        // <a href="SellerAcctLogin">Are you a seller? Click here</a>

            <div className='bloginwrapper'>
                <br></br>
                <br></br>
                <div className='header'>
                </div>
                <div className='signUp'>
                    <h1>Sign Up</h1>
                </div>
                <br></br>
                <br></br>
                <div className='buttons'>
                    {/* <FacebookLoginButton onClick={responseFacebook} /> */}
                    <GoogleLoginButton onClick={responseGoogle} />
            {/* <GoogleLogin
                clientId="786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            /> */}
                </div>
                <br></br>
                <br></br>
                <div className='sellerLink'>
                    <a href="SellerAcctLogin">Are you a seller? Click here</a>
                </div>
            </div>
      
    );
  
export default BuySignUp;
