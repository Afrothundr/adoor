import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from '../../utils/API';

class MyMatches extends Component {
    constructor() {
        super();
        this.state = {
            //replace userId with stored cookie value
            userId: '5a88545591e285977de483da',
            listings: []
        }
    }

    //functions
    // Get mathed listing IDs from User API
    getMatches = () => {
        API.getUser(this.state.userId)
            .then((user) => {
                this.getListings(user.data.matches.history)
               // console.log(user.data.matches.history);
            }).catch(err => console.log(err));
    }

    // Get listing info from listing API
    getListings = (matches) => {
        matches.forEach(match => {
            API.getListing(match)
                .then((listing) => {
                    this.setState((state) => {
                        console.log(listing.data);
                        state.listings.push(listing.data);
                        return { userId: state.userId, listings: state.listings};
                    });
                }).catch(err => console.log(err))
        })

    }

    componentWillMount = () => {
        this.getMatches('5a88545591e285977de483da')
    }
    // JSX Render
    render() {
        return (
            <div className="test">
                {this.state.listings.map(listing => {
                    return (
                        <div className="listing-card">
                            <h2 className="address-card" key={listing._id}>{listing.address}</h2>
                            <hr/>
                            <h3 className="sub-address-card" key={listing._id}>{listing.city}, {listing.zipcode}</h3>
                            <h3 className="listing-attributes" key={listing._id}>Bedrooms: {listing.bedrooms}</h3>
                            <h3 className="listing-attributes" key={listing._id}>Bathrooms: {listing.bathrooms}</h3>
                            <h3 className="listing-attributes" key={listing._id}>Listing Price: ${listing.price}</h3>
                            {/* <h3 key={listing._id}>{listing.picturePath}</h3> */}
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default MyMatches;