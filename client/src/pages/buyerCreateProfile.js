import React from "react";
import StandardSideBar from '../components/standardSideBar/standardSidebar';
import UserPrefQuiz from '../components/UserPrefQuiz/UserPrefQuiz';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './gridStyles.css';

const BuyerProfileCreate = props => {
  return (
    <div className="wrapper-main">
      <div className="content-wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="content-main">
          <UserPrefQuiz />
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

export default BuyerProfileCreate;