import React from 'react';
import {Redirect} from 'react-router';
import { GoogleLogin} from 'react-google-login';
import axios from 'axios';
import "./SellerAcctLogin.css";
class BuySignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null,
            firstTimeUser: null
        };
    }

    responseGoogle(response){
        axios.post('/auth/google/seller', response)
        .then(res => {
            document.cookie = `userId=${res.data._id}`;
            if(res.data.preferences){
                this.setState({
                    firstTimeUser: false,
                    isLoggedIn: true
                })
            }else{
                this.setState({
                    firstTimeUser: true,
                    isLoggedIn: true,                    
                })
            }
        })
        .catch(function (error) {
            console.log(error);
          });
    };
    
    responseFacebook(response){
        axios.post('/auth/facebook/seller', response)
        .then(res => {
            document.cookie = `userId=${res.data._id}`;
            if(res.data.preferences){
                this.setState({
                    firstTimeUser: false,
                    isLoggedIn: true
                })
            }else{
                this.setState({
                    firstTimeUser: true,
                    isLoggedIn: true,                    
                })
            }
        })
        .catch(function (error) {
            console.log(error);
          });
    };
    
    logout(){
        axios.post('/auth/google/api/logout');
    }


    render(){
        if(this.state.isLoggedIn === true){
            return <Redirect to={"/seller/dashboard"} />;
        }
        return(        
        <div className='component-wrapper'>
            <div>
                <h1 className='signUp'>Sign Up</h1>
            </div>
            <div className='buttons'>
                <GoogleLogin
                    className="google-login-button"
                    clientId='786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com'
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle.bind(this)}
                    onFailure={this.responseGoogle.bind(this)}
                />
                
            </div>
        </div>
        )}
};

export default BuySignUp;
