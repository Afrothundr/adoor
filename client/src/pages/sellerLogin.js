import React from "react";
import StandardSideBar from '../components/standardSideBar/standardSidebar';
import SellSignUp from '../components/SellerAcctLogin/SellerAcctLogin';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './gridStyles.css';

const SellerAcctLogin = () => {
  return (
    <div className="wrapper-main">
    <div className="content-wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="content-main">
        <SellSignUp />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    <div className="standard-sidebar">
      <StandardSideBar />
    </div>
  </div>
  );
}

export default SellerAcctLogin;