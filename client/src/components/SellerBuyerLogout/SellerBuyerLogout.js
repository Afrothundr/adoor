import React from 'react';
import { Route, Redirect } from 'react-router';
import { Router, Switch } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import './logout.css'


class SellerBuyerLogout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        };
    }

    delete_cookie(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    googleLogout(obj) {
        console.log("Google user loging out.");
        this.setState({
            isLoggedIn: false
        })
        this.delete_cookie("userId");
        console.log("is user logged in? " + this.state.isLoggedIn);
    }


    render() {
        if(this.state.isLoggedIn === false){
            return <Redirect to={"/"} />;
        }
       
        return (
            <div>
                <div className='logout'>
                    <GoogleLogout
                        className="google-logout"
                        buttonText="Logout"
                        onLogoutSuccess={this.googleLogout.bind(this)}>
                    </GoogleLogout>
                </div>
            </div>
        )
    }
};

export default SellerBuyerLogout;