import React from "react";
import MyListingsTable from '../components/MyListings/MyListingsTable';
import AddListingForm from '../components/MyListings/AddListingForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './gridStyles.css';

const SellerDashboard = props => {
  return (
    <div className="wrapper-main">
      <div className="dashboard-header"><Header /></div>
      <div className="dashboard-main">
        <div><MyListingsTable /></div>
        <div><AddListingForm /></div>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default SellerDashboard;