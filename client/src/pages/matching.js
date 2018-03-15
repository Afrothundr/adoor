import React from "react";
import MatchingContainer from '../components/Matching/MatchingContainer';
import MatchingSideBar from '../components/matchingSideBar/matchingSideBar';
import SellerBuyerLogout from '../components/SellerBuyerLogout/SellerBuyerLogout';
import MyMatches from '../components/myMatches/myMatches';
import MatchingButton from '../components/MatchingButton/MatchingButton';
import './gridStyles.css';

const Matching = props => {
  return (
    <div className="matching-dashboard-wrapper page">
      <div className="my-matches-button">
      <MatchingButton />
      <SellerBuyerLogout/>
      </div>
      <div>
        <div className="matching-main">
          <MatchingContainer />
        </div>
        <div>
          <MyMatches />
        </div>
      </div>
    </div>
  );
}

export default Matching;