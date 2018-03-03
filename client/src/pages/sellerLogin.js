import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import SellSignUp  from '../components/SellerAcctLogin/SellerAcctLogin';

const SellerAcctLogin = props => {
  return (
    <div>
      <StandardSideBar />
      <SellSignUp />
    </div>
  );
}

export default SellerAcctLogin;