import React, { Component } from "react";

class MatchingSideBar extends Component {
    render() {
        return (
            <div className="component-sidebar">
            <div>
                <p>Create An Account</p>
                {/* <img className="image-container" src={require("./imgs/createAccount.png")} alt='create an account' /> */}
                <hr />
            </div>
            <div>
                <p>Choose Your Preferences</p>
                {/* <img className="image-container" src={require("./imgs/preferences.png")} alt='create an account' /> */}
                <hr />
            </div>
            <div>
                <p>Discover Your Matches</p>
                {/* <img className="image-container" src={require("./imgs/matchesTwo.png")} alt='create an account' /> */}
                <hr />
            </div>
            <div>
                <p>Find Your Next Home</p>
                {/* <img className="image-container" src={require("./imgs/home.png")} alt='create an account' /> */}
                <hr />
            </div>
        </div>
        );
      }

    }

export default MatchingSideBar;