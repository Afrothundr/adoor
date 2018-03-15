import React from "react";
import StandardSideBar from '../components/standardSideBar/standardSidebar';
import UserPrefQuiz from '../components/UserPrefQuiz/UserPrefQuiz';
import './gridStyles.css';

const BuyerProfileCreate = props => {
  return (
    <div className="wrapper-main page">
      <div className="content-main">
        <StandardSideBar />
      </div>
      <div className="standard-sidebar">
        <UserPrefQuiz />
      </div>
    </div>
  );
}

export default BuyerProfileCreate;