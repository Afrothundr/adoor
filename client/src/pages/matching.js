import React from "react";
import MatchingContainer from '../components/Matching/MatchingContainer';
import MatchingSideBar from '../components/matchingSideBar/matchingSideBar';
import MyMatches from '../components/myMatches/myMatches';
import './gridStyles.css';

const Matching = props => {
  return (
    <div>
      <div>
        <MatchingContainer />
      </div>
      <div>
        <MyMatches />
      </div>
      <div>
        <MatchingSideBar />
      </div>
    </div>
  );
}

export default Matching;