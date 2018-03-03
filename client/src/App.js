import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SellerDashboard from './pages/sellerDashboard';
import BuyerProfileCreate from './pages/buyerCreateProfile';
import BuyerLogin from './pages/buyerLogin';
import SellerAcctLogin from './pages/sellerLogin'

const App = props => {
  return (
    <div>
      <SellerAcctLogin />
    </div>
  );
}

export default App;