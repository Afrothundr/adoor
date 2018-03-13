import React from "react";
import MatchingContainer from '../components/Matching/MatchingContainer';
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
    </div>
  );
}

export default Matching;