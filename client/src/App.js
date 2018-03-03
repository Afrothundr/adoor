import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SellerDashboard from './pages/sellerDashboard';
import BuyerProfileCreate from './pages/buyerCreateProfile';
import BuyerLogin from './pages/buyerLogin';
import SellerAcctLogin from './pages/sellerLogin';
import Matching from './pages/matching';
import Home from './pages/index';

const App = props => {
  return (
    <Router history={Router}>
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/matching" component={Matching}></Route>
      <Route exact path="/seller/dashboard" component={SellerDashboard}></Route>
      <Route exact path="/profile/login" component={BuyerLogin}></Route>
      <Route exact path="/profile/create" component={BuyerProfileCreate}></Route>
      <Route exact path="/seller/login" component={SellerAcctLogin}></Route>
    </div>
    </Router>
  );
}

export default App;