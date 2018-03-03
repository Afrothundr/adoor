import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import SellSignUp  from '../components/SellerAcctLogin/SellerAcctLogin';
import './gridStyles.css';

const SellerAcctLogin = props => {
  return (
    <div className="wrapper-seller-login">
      <SellSignUp />
      <StandardSideBar />
    </div>
  );
}

export default SellerAcctLogin;