import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import BuyAcctLogin  from '../components/BuyAcctLogin/BuyerAcctLogin';

const BuyerLogin = props => {
  return (
    <div>
      <StandardSideBar />
      <BuyAcctLogin />
    </div>
  );
}

export default BuyerLogin;