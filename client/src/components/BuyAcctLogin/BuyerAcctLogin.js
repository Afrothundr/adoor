import React from 'react';
import {Redirect} from 'react-router';
import { GoogleLogin} from 'react-google-login';
import axios from 'axios';
import { bake_cookie, delete_cookie } from 'sfcookies';
import "./BuyerAcctLogin.css"

class BuySignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null,
            firstTimeUser: null
        };
    }

    responseGoogle(response) {
        axios.post('/auth/google/user', response)
        .then(res => {
            //store cookie
            let cookie_key = 'userId';
            bake_cookie(cookie_key, res.data._id);
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

    componentWillMount = () => {
        delete_cookie('userId');
    }

    responseFacebook(response) {
        axios.post('/auth/facebook/user', response)
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

    logout() {
        axios.post('/auth/google/api/logout');
    }


    render() {
        if (this.state.firstTimeUser === false) {
            return <Redirect to={"/matching"} />;
        }
        else if (this.state.firstTimeUser === true) {
            return <Redirect to={"/profile/create"} />;
        }
        return (
            <div className='component-wrapper'>
                <div className="signin-logo">
                    <img src={require('./imgs/logo.png')} className="logo" />
                </div>
                <div>
                    <h1 className='signUp'>Sign Up</h1>
                </div>
                <div>
                    {/* <FacebookLogin
                    appId="927418800748086"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook.bind(this)}
                /> */}
                    <GoogleLogin
                        className="google-login-button"
                        clientId='786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com'
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle.bind(this)}
                        onFailure={this.responseGoogle.bind(this)}
                    />
                </div>
            </div>
        )
    }
};

export default BuySignUp;
