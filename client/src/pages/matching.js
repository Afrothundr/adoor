import React from "react";
import MatchingContainer  from '../components/Matching/MatchingContainer';
import MatchingSideBar  from '../components/matchingSideBar/matchingSideBar';
import './gridStyles.css';

const Matching = props => {
  return (
    <div className="wrapper-buyer-login">
      <MatchingContainer />
      <MatchingSideBar />
    </div>
  );
}

export default Matching;