import React, { Component } from "react";
import './standardSidebar.css';


// placeholder image. Need to echange with a stock image of a home
const tagLineHeader = "About Adoor"
const tagLineText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim porta fermentum. Aenean maximus justo vestibulum eleifend fringilla. Donec et elementum orci. Maecenas consequat dolor auctor turpis vestibulum porta. Maecenas pellentesque, tortor sit amet ullamcorper condimentum, nisi nisl venenatis tortor, ac rutrum sapien purus ut velit.";

class StandardSideBar extends Component {
    render() {
        return (
            <div className="component-sidebar">
                <div>
                    <p>Create An Account</p>
                    <img className="image-container" src={require("./imgs/createAccount.png")} alt='create an account' />
                    <hr />
                </div>
                <div>
                    <p>Choose Your Preferences</p>
                    <img className="image-container" src={require("./imgs/preferences.png")} alt='create an account' />
                    <hr />
                </div>
                <div>
                    <p>Discover Your Matches</p>
                    <img className="image-container" src={require("./imgs/matchesTwo.png")} alt='create an account' />
                    <hr />
                </div>
                <div>
                    <p>Find Your Next Home</p>
                    <img className="image-container" src={require("./imgs/home.png")} alt='create an account' />
                    <hr />
                </div>
            </div>
        );
    }

}

export default StandardSideBar;