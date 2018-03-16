import React, { Component } from "react";
import MatchingContainer from '../components/Matching/MatchingContainer';
import MatchingSideBar from '../components/matchingSideBar/matchingSideBar';
import SellerBuyerLogout from '../components/SellerBuyerLogout/SellerBuyerLogout';
import MyMatches from '../components/myMatches/myMatches';
import MatchingButton from '../components/MatchingButton/MatchingButton';
import './gridStyles.css';


class Matching extends Component {
  constructor() {
    super();
    //intial state
    this.state = {
      userHasMatches: false,
    }
  }


  handleuserHasMatches = user => {
    if (user.matches) {
      this.setState({
        userHasMatches: true
      });
    }
  }

  render() {
    return (
      <div className="matching-dashboard-wrapper-page">
        <div className="my-matches-button">
          {this.state.userHasMatches ? (
            <MatchingButton />
          ) : null}
        </div>
        <div className="logo">
          <img src={require('./imgs/logo.png')} className="logo" />
        </div>
        <div className="matching-main">
          <MatchingContainer userMatches={this.handleuserHasMatches} />
        </div>
        <div>
          <SellerBuyerLogout />
        </div>
      </div>
    );
  }

}

export default Matching;