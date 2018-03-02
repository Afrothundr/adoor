import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPrefQuiz from './components/UserPrefQuiz/UserPrefQuiz';
import StandardSideBar from './components/standardSideBar/standardSidebar';
import MatchingSideBar from './components/matchingSideBar/matchingSideBar';
import BuySignUp from './components/BuyAcctLogin/BuyerAcctLogin';
import SellerAcctLogin from './components/SellerAcctLogin/SellerAcctLogin';
import MyMatches from './components/myMatches/myMatches';
import MyListings  from './components/MyListings/MyListingsTable';
import matchingContainer from './components/Matching/MatchingContainer';
import matchingPage from './components/Matching/MatchingPage.js';

const App = props => {
  return (
    <MuiThemeProvider>
      {/* <UserPrefQuiz />
      <StandardSideBar />
      <MatchingSideBar /> */}
      {/* <BuySignUp />
      <SellerAcctLogin />
      <MyMatches />
      <MyListings /> */} 
      {/* <matchingContainer /> */}
      <matchingPage />
    </MuiThemeProvider>
  );
}

export default App;