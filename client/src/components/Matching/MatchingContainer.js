import React, { Component } from "react";
import Slider from 'react-slick';
import ListingCard from './ListingCard';
import './MatchingContainer.css'
// import API from '../../utils/API';



class MatchingContainer extends Component {
    constructor() {
        super();
        //intial state
        this.state = {
            //replace userId with stored cookie value
            userId: '5a8f3ab48896fd45f054117d'
        }
    }
    
    handleDecision = decision => {
        if (decision === 'Yes') {
            console.log('I like this');
        } else {
            console.log('I hate this');
        }
    }

    render() {
        var settings = {
            arrows: false
        };
        return (
            <Slider {...settings} className="matching-container" style={{width: "500px"}}>
                <div><ListingCard key={0} title="3 bed 2 bath" onDecision={this.handleDecision} /></div>
                <div><ListingCard key={1}/></div>
                <div><ListingCard key={2}/></div>
            </Slider>
        );
    }
}

export default MatchingContainer;