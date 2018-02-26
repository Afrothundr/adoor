import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPrefQuiz from './components/UserPrefQuiz/UserPrefQuiz';
import AddListingForm from './components/MyListings/AddListingForm';

const App = props => {
  return (
    <MuiThemeProvider>
      <AddListingForm />
    </MuiThemeProvider>
  );
}

export default App;