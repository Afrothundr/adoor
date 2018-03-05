import React from "react";
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SellerDashboard from './pages/sellerDashboard';
import BuyerProfileCreate from './pages/buyerCreateProfile';
import BuyerLogin from './pages/buyerLogin';
import SellerAcctLogin from './pages/sellerLogin';
import Matching from './pages/matching';
import Home from './pages/index';


const App = props => {
  return (
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames='fade'
        >
          <Switch location={ location }>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/matching" component={Matching}></Route>
            <Route exact path="/seller/dashboard" component={SellerDashboard}></Route>
            <Route exact path="/profile/login" component={BuyerLogin}></Route>
            <Route exact path="/profile/create" component={BuyerProfileCreate}></Route>
            <Route exact path="/seller/login" component={SellerAcctLogin}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default App;