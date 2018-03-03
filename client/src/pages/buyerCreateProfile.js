import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import UserPrefQuiz  from '../components/UserPrefQuiz/UserPrefQuiz';

const BuyerProfileCreate = props => {
  return (
    <div>
      <StandardSideBar />
      <UserPrefQuiz />
    </div>
  );
}

export default BuyerProfileCreate;