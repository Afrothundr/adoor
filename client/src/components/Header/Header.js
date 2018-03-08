import React, { Component } from "react";
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-component">
                <h2>
                <img className="logo-heart" src={require("../../pages/imgs/logo-heart.png")} alt='adoor' />
                    Start Finding Your Match Today
                </h2>
            </div>
        )

    }
}

export default Header