import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPrefQuiz from './components/UserPrefQuiz/UserPrefQuiz';

const App = props => {
  return (
    <MuiThemeProvider>
      <UserPrefQuiz />
    </MuiThemeProvider>
  );
}

export default App;