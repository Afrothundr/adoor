import React from "react";
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SellerDashboard from './pages/sellerDashboard';
import BuyerProfileCreate from './pages/buyerCreateProfile';
import BuyerLogin from './pages/buyerLogin';
import SellerAcctLogin from './pages/sellerLogin';
import Matching from './pages/matching';
import BuyerAcctLogin from '../src/components/BuyAcctLogin/BuyerAcctLogin';

const App = props => {
  return (
      <BuyerAcctLogin />
  );
}

export default App;