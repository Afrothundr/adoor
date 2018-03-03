import React from "react";
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import SellSignUp  from '../components/SellerAcctLogin/SellerAcctLogin';
import './gridStyles.css';

const SellerAcctLogin = () => {
  return (
    <div className="wrapper-seller-login">
      <SellSignUp />
      <StandardSideBar />
    </div>
  );
}

export default SellerAcctLogin;