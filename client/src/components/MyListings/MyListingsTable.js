import React, { Component } from "react";
import API from '../../utils/API';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class MyListings extends Component {
    constructor() {
        super();
        this.state = {
            //replace userId with stored cookie value
            userId: '5a88545591e285977de483da',
            listings: []
        }
    }

    //functions
    // Get matched listing IDs from User API
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
                        return { userId: state.userId, listings: state.listings };
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
            <br></br>
            <br></br>
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
                                <TableRow>
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

export default MyListings;