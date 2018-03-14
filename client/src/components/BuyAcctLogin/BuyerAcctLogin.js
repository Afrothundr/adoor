import React from 'react';
import {Route, Redirect} from 'react-router';
import { Router, Switch } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import "./BuyerAcctLogin.css"

const styles = {
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignText: 'center'
    }
};

class BuySignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null,
            firstTimeUser: null
        };
    }

    responseGoogle(response){
        axios.post('/auth/google/user', response)
        .then(res => {
            console.log(res.data);
            document.cookie = `userId=${res.data._id}`;
            console.log(document.cookie);
            if(res.data.preferences){
                console.log("Not a new user google in promise");
                this.setState({
                    firstTimeUser: false,
                    isLoggedIn: true
                })
            }else{
                console.log("New user in google axios promise");
                this.setState({
                    firstTimeUser: true,
                    isLoggedIn: true,                    
                })
            }
            console.log("first time user? " + this.state.firstTimeUser);
        })
        .catch(function (error) {
            console.log(error);
          });
    };
    
    responseFacebook(response){
        axios.post('/auth/facebook/user', response)
        .then(res => {
            console.log(res.data);
            document.cookie = `userId=${res.data._id}`;
            console.log(document.cookie);
            if(res.data.preferences){
                console.log("Not a new user in axios facebook promise");
                this.setState({
                    firstTimeUser: false,
                    isLoggedIn: true
                })
            }else{
                console.log("New user in axios facebook promise");
                this.setState({
                    firstTimeUser: true,
                    isLoggedIn: true,                    
                })
            }
            console.log("first time user? " + this.state.firstTimeUser);
        })
        .catch(function (error) {
            console.log(error);
          });
    };
    
    logout(){
        axios.post('/auth/google/api/logout');
    }


    render(){
        if(this.state.firstTimeUser === false){
            return <Redirect to={"/matching"} />;
        }
        else if(this.state.firstTimeUser === true){
            return <Redirect to={"/profile/create"} />;
        }
        return(        
        <div className='component-wrapper'>
            <div>
                <h1 className='signUp'>Sign Up</h1>
            </div>
            <div className='buttons'>
                <FacebookLogin
                    appId="927418800748086"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook.bind(this)}
                />
                <GoogleLogin
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
