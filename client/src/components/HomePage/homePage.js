import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import './homePage.css';

const HomePage = () => (
    <div className='home-wrapper'>
        <div className='logo'>
            <img className="logo-img" src={require('../../pages/imgs/logo.png')} id='logo' alt="logo" />
        </div>
        <div className='buttons'>
            <div className="buttonOne">
                <Link to="/profile/login">
                    <RaisedButton label="Find Your Match" secondary={true} className='button' />
                </Link>
            </div>
            <div className="buttonTwo">
                <Link to="/seller/login">
                    <RaisedButton label="List Your Home" secondary={true} className='button' />
                </Link>
            </div>
        </div>
    </div>


);

export default HomePage;