import React from "react";
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import BuyAcctLogin  from '../components/BuyAcctLogin/BuyerAcctLogin';
import './gridStyles.css';

const BuyerLogin = props => {
  return (
    <div className="wrapper-buyer-login">
      <BuyAcctLogin />
      <StandardSideBar />
    </div>
  );
}

export default BuyerLogin;