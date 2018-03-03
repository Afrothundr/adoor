import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyListingsTable  from '../components/MyListings/MyListingsTable';
import AddListingForm  from '../components/MyListings/AddListingForm';

const SellerDashboard = props => {
  return (
    <div>
      <MyListingsTable />
      <AddListingForm />
    </div>
  );
}

export default SellerDashboard;