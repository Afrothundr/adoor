import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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