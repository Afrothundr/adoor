import React from "react";
import StandardSideBar  from '../components/standardSideBar/standardSidebar';
import UserPrefQuiz  from '../components/UserPrefQuiz/UserPrefQuiz';
import './gridStyles.css';

const BuyerProfileCreate = props => {
  return (
    <div className="wrapper-create-profile">
      <UserPrefQuiz />
      <StandardSideBar />
    </div>
  );
}

export default BuyerProfileCreate;