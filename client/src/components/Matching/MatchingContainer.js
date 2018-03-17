import React, { Component } from "react";
import Slider from 'react-slick';
import ListingCard from './ListingCard';
import API from '../../utils/API';
import { checkForCommunityMatch, checkForLocationMatch } from '../../utils/MatchingAlgorithm';


class MatchingContainer extends Component {
    constructor() {
        super();
        //intial state
        this.state = {
            //replace userId with stored cookie value
            userId: null,
            listings: [],

        }
        this.next = this.next.bind(this)
    }
    componentWillMount() {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        this.setState({
            userId: cookieValue
        }, () => {
            API.getUser(this.state.userId).then(user => {
                this.setState({ user: user.data });
            }).then(() => {
                this.props.userMatches(this.state.user)
            }).catch(err => {
                console.log(err);
            })
        }
        )

        API.getListings().then(listings => {
            listings.data.forEach(listing => {
                this.state.listings.push(listing);
            })
            this.randomize(this.state.listings);
        });
    }

randomize = (array, b, c, d) => { c = array.length; while (c) b = Math.random() * c-- | 0, d = array[c], array[c] = array[b], array[b] = d }

refreshUser() {
    API.getUser(this.state.userId).then(user => {
        this.setState({ user: user.data });
    });
}
//handle decision
handleDecision = (decision, listingId) => {
    if (decision === 'Yes') {
        console.log('I like this');
        this.checkForMatch(this.state.user, listingId);
        this.next();
    } else {
        console.log('I hate this');
        this.next();
    }
}

checkForMatch = (user, listingId) => {
    API.getListing(listingId).then(listing => {
        if (user.matches) {
            //User has existing matches
            let score = (this.compareCompatibility(user, listing.data));
            if (score > 2) {
                alert("It's a match!");
                if (!user.matches.history.includes(listing.data._id)) {
                    API.addMatch(user.matches._id, listing.data._id).then(match => {
                        console.log("Match Added!");
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }

        } else {
            //User has not gotten any matches yet
            let score = (this.compareCompatibility(user, listing.data));
            if (score > 2) {
                alert("It's a match!");
                API.createMatch(user._id, listing.data._id).then(match => {
                    console.log("Match Added!");
                    //refresh user state;
                    this.refreshUser();
                }).catch(err => {
                    console.log(err);
                })
            }

        }
    })
}

compareCompatibility = (user, listing) => {
    let communityScore = checkForCommunityMatch(user, listing);
    let locationScore = checkForLocationMatch(user, listing);
    let score = communityScore + locationScore;
    return score;

}

handleSlideChange = (currentSlide, nextSlide) => {
    console.log(currentSlide);

}

deleteListing = (array, element) => {
    return array.filter(e => e !== element);
}

next() {
    this.slider.slickNext();
}


render() {
    var settings = {
        arrows: false,
        draggable: false,
        beforeChange: this.handleSlideChange
    };

    return (
        <Slider ref={c => this.slider = c} {...settings} className="matching-container" style={{ width: "500px" }}>
            {
                this.state.listings.map(listing => {
                    return (
                        <div key={listing._id} data-index={listing._id}>
                            <ListingCard listingInfo={listing} key={listing._id} title={`${listing.bedrooms} bed ${listing.bathrooms} bath`} onDecision={this.handleDecision} />
                        </div>
                    )
                })
            }
        </Slider>
    );
}
}

export default MatchingContainer;