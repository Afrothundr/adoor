import React from "react";
import StandardSideBar from '../components/standardSideBar/standardSidebar';
import BuyAcctLogin from '../components/BuyAcctLogin/BuyerAcctLogin';
import './gridStyles.css';

const BuyerLogin = props => {
  return (
    // wrapper main splits the screen up in two columns
    <div className="wrapper-main transition-item page">
      <div className="cover-image">
        <StandardSideBar />
      </div>
      <div className="main-content">
        <BuyAcctLogin />
      </div>
    </div>
  );
}

export default BuyerLogin;