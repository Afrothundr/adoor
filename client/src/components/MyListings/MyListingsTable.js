import React, { Component } from "react";
import API from '../../utils/API';
import { read_cookie } from 'sfcookies';
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
            //replace sellerId with stored cookie value
            sellerId: null,
            listings: []
        }
    }

    //functions
    // Get listing info from listing API
    getListings = (seller) => {
            API.getSeller(seller)
                .then((seller) => {
                    seller.data.listings.forEach(listing => {
                        if (listing !== null) {
                            this.setState(state => {
                                this.state.listings.push(listing);
                                return { sellerId: state.sellerId, listings: state.listings };
                            })
                        }
                    }) 
                }).catch(err => console.log(err))
    }

    componentWillMount = () => {
        this.setState({
                sellerId: read_cookie('userId')
            }, () => {
                this.getListings(this.state.sellerId)
            }
        )
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

export default MyListings;