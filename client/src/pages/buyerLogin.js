import React from "react";
import StandardSideBar from '../components/standardSideBar/standardSidebar';
import BuyAcctLogin from '../components/BuyAcctLogin/BuyerAcctLogin';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './gridStyles.css';

const BuyerLogin = props => {
  return (
    // wrapper main splits the screen up in two columns
  
    <div className="wrapper-main transition-item page">
      <div className="content-wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="content-main">
          <BuyAcctLogin />
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

export default BuyerLogin;