import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SellerDashboard from './pages/sellerDashboard';
import BuyerProfileCreate from './pages/buyerCreateProfile';
import BuyerLogin from './pages/buyerLogin';
import SellerAcctLogin from './pages/sellerLogin';
import Matching from './pages/matching';

const App = props => {
  return (
    <div>
      <Matching />
    </div>

  );
}

export default App;