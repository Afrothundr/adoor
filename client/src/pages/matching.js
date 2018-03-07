import React from "react";
import MatchingContainer from '../components/Matching/MatchingContainer';
import MatchingSideBar from '../components/matchingSideBar/matchingSideBar';
import './gridStyles.css';

const Matching = props => {
  return (
    <div className="wrapper-main">
      <div className="content-main">
        <MatchingContainer />
      </div>
      <div className="matching-sidebar">
        <MatchingSideBar />
      </div>

    </div>
  );
}

export default Matching;