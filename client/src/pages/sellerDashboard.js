import React from "react";
import MyListingsTable  from '../components/MyListings/MyListingsTable';
import AddListingForm  from '../components/MyListings/AddListingForm';
import './gridStyles.css';

const SellerDashboard = props => {
  return (
    <div className="wrapper-seller-dashboard">
      <MyListingsTable />
      <AddListingForm />
    </div>
  );
}

export default SellerDashboard;