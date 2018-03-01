import React, { Component } from "react";
import ReactDOM from 'react-dom';

// placeholder image. need to exchange with logo image
const logo = "http://via.placeholder.com/250x150";
// placeholder image. Need to echange with a stock image of a home
const tagLineHeader = "Adoor Matching"
const tagLineTextShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim porta fermentum. Aenean maximus justo vestibulum.";

// needs to calculate the number of matches the user has
let matchCounter = 0;

class MatchingSideBar extends Component {
    render() {
        return (
          <div className="matching-sidebar">
            <div><img src={logo} /></div>
                <div>
                    <h2>{tagLineHeader}</h2>
                    <p>{tagLineTextShort}</p>
                </div>
                {/* placeholder button. Replace with a better formatted solution */}
                <div> 
                    <button>My Matches</button>
                </div>
                <div>
                    <p>You Have {matchCounter} matches!</p>
                </div>
          </div>
        );
      }

    }

export default MatchingSideBar;