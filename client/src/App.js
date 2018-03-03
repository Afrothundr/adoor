import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SellerDashboard from './pages/sellerDashboard';
import BuyerProfileCreate from './pages/buyerCreateProfile';
import BuyerLogin from './pages/buyerLogin';
import SellerAcctLogin from './pages/sellerLogin';
import Matching from './pages/matching';
import Home from './pages/index';


const App = props => {
  return (
    <div>
      <Home />
      {/* <BuyerLogin /> */}
      {/* <BuyerProfileCreate /> */}
      {/* <Matching/> */}
      {/* <SellerAcctLogin /> */}
      {/* <SellerDashboard /> */}
    </div>
  );
}

export default App;