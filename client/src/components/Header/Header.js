import React, { Component } from "react";
import './header.css';
import SellerBuyerLogout from '../SellerBuyerLogout/SellerBuyerLogout'

class Header extends Component {
    render() {
        return (
            <div className="header-component">
                <div>
                    <SellerBuyerLogout />
                </div>
                <div className="header-tagline">
                    <img className="logo-heart" src={require("../../pages/imgs/logo-heart.png")} alt='adoor' />
                    <h2>Your Listings</h2>
                </div>
            </div>
        )

    }
}

export default Header