import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPrefQuiz from './components/UserPrefQuiz/UserPrefQuiz';
import StandardSideBar from './components/standardSideBar/standardSideBar';
import MatchingSideBar from './components/matchingSideBar/matchingSideBar';

const App = props => {
  return (
    <MuiThemeProvider>
      <UserPrefQuiz />
      <StandardSideBar />
      <MatchingSideBar />
    </MuiThemeProvider>
    
  );
}

export default App;