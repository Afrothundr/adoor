import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPrefQuiz from './components/UserPrefQuiz/UserPrefQuiz';
import StandardSideBar from './components/standardSideBar/standardSideBar';
import MatchingSideBar from './components/matchingSideBar/matchingSideBar';
import BuySignUp from './components/BuyAcctLogin/BuyerAcctLogin';
import SellerAcctLogin from './components/SellerAcctLogin/SellerAcctLogin';

const App = props => {
  return (
    <MuiThemeProvider>
      <UserPrefQuiz />
      <StandardSideBar />
      <MatchingSideBar />
      <BuySignUp />
      <SellerAcctLogin />
    </MuiThemeProvider>
    
  );
}

export default App;