import React from "react";
import MyListingsTable from '../components/MyListings/MyListingsTable';
import AddListingForm from '../components/MyListings/AddListingForm';
import Header from '../components/Header/Header';
import './gridStyles.css';

const SellerDashboard = props => {
  return (
    <div className="seller-dashboard-wrapper page">
      <div>
        <Header />
      </div>
      <div className="wrapper-main">
        <div className="content-main">
          <MyListingsTable />
        </div>
        <div className="standard-sidebar">
          <AddListingForm />
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;