import React from 'react';
import './matching.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className='Home'>
        {/* <img src={require('./imgs/option1.jpg')} id='bg' alt="bg" /> */}
        <div className='logo'>
            <img src={require('./imgs/logo.png')} id='logo' alt="logo" />
        </div>
        <div className='buttons'>
            <Link to="/profile/login">
                <RaisedButton label="Log In" secondary={true} className='button' />
            </Link>
            <br></br>
            <br></br>
            <Link to="/profile/create">
                <RaisedButton label="Sign Up" secondary={true} className='button' />
            </Link>
        </div>

    </div>


);

export default HomePage;