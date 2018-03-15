import React, { Component } from "react";
import "./myMatches.css";
import API from '../../utils/API';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class MyMatches extends Component {
    constructor() {
        super();
        this.state = {
            //replace userId with stored cookie value
            userId: null,
            listings: []
        }
    }

    //functions
    // Get mathed listing IDs from User API
    getMatches = () => {
        API.getUser(this.state.userId)
            .then((user) => {
                this.getListings(user.data.matches.history)
                console.log(user.data.matches.history);
            }).catch(err => console.log(err));
    }

    // Get listing info from listing API
    getListings = (matches) => {
        matches.forEach(match => {
            API.getListing(match)
                .then((listing) => {
                    if (listing.data !== null) {
                        console.log(listing);
                        this.setState((state) => {
                            state.listings.push(listing.data);
                            return { userId: state.userId, listings: state.listings };
                        });
                    }
                }).catch(err => console.log(err))
        })

    }

    componentWillMount = () => {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        this.setState({
            userId: cookieValue
        }, () => {
            this.getMatches(this.state.userId)
        })
    }
    // JSX Render
    render() {
        return (
            <div ref="matchingTable">
                <Table >
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow >
                            <TableHeaderColumn className="list-headers">Address</TableHeaderColumn>
                            <TableHeaderColumn className="list-headers">City</TableHeaderColumn>
                            <TableHeaderColumn className="list-headers">Zip Code</TableHeaderColumn>
                            <TableHeaderColumn className="list-headers">Listing Price</TableHeaderColumn>
                            <TableHeaderColumn className="list-headers">Bedrooms</TableHeaderColumn>
                            <TableHeaderColumn className="list-headers">Bathrooms</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.state.listings.map(listing => {
                            return (
                                <TableRow key={listing._id}>
                                    <TableRowColumn className="list-items">{listing.address}</TableRowColumn>
                                    <TableRowColumn className="list-items">{listing.city}</TableRowColumn>
                                    <TableRowColumn className="list-items">{listing.zipcode}</TableRowColumn>
                                    <TableRowColumn className="list-items">{`$${listing.price}`}</TableRowColumn>
                                    <TableRowColumn className="list-items">{listing.bedrooms}</TableRowColumn>
                                    <TableRowColumn className="list-items">{listing.bathrooms}</TableRowColumn>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default MyMatches;