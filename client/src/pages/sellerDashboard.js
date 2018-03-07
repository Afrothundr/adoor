import React from "react";
import MyListingsTable from '../components/MyListings/MyListingsTable';
import AddListingForm from '../components/MyListings/AddListingForm';
import './gridStyles.css';

const SellerDashboard = props => {
  return (
    <div className="seller-main">
      <div className="table-layout">
        <MyListingsTable />
      </div>
      <div className="add-listing-sidebar">
        <AddListingForm />
      </div>
    </div>
  );
}

export default SellerDashboard;