import React from "react";
import StandardSideBar from '../components/standardSideBar/standardSidebar';
import SellSignUp from '../components/SellerAcctLogin/SellerAcctLogin';
import './gridStyles.css';

const SellerAcctLogin = () => {
  return (
    <div className="wrapper-main transition-item page">
      <div className="cover-image">
        <StandardSideBar />
      </div>
      <div className="main-content">
        <SellSignUp />
      </div>
    </div>
  );
}

export default SellerAcctLogin;