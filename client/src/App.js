import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPrefQuiz from './components/UserPrefQuiz/UserPrefQuiz';
import StandardSideBar from './components/standardSideBar/standardSideBar';

const App = props => {
  return (
    <MuiThemeProvider>
      <UserPrefQuiz />
      <StandardSideBar />
    </MuiThemeProvider>
    
  );
}

export default App;