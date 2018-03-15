import React, { Component } from "react";
import './standardSidebar.css';
class StandardSideBar extends Component {
    render() {
        return (
            <img className="cover-photo" src={require("../../pages/imgs/brick-buildings.jpg")} alt='create an account' />
        );
    }
}

export default StandardSideBar;