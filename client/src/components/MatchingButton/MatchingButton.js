import React, { Component } from "react";
import './button.css';

class MatchingButton extends Component {
    render() {
        return (
            <div className="button-component">
                <img className="matching-button" src={require('../../pages/imgs/myMatchesButton.png')} id='logo' alt="logo" />
            </div>
        )

    }
}

export default MatchingButton