import React from 'react';
import './matching.css';
import RaisedButton from 'material-ui/RaisedButton';

const HomePage = () => (
    <div className='Home'>
        {/* <img src={require('./imgs/option1.jpg')} id='bg' alt="bg" /> */}
        <div className='logo'>
            <img src={require('./imgs/logo.png')} id='logo' alt="logo" />
        </div>
        <div className='buttons'>
            <RaisedButton label="Log In" secondary={true} className='button'/>
            <br></br>
            <br></br>
            <RaisedButton label="Sign Up" secondary={true} className='button' />
        </div>
        
    </div>


);

export default HomePage;