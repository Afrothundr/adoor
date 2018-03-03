import React, { Component } from "react";
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import LazyLoad from 'react-lazyload';
import RaisedButton from 'material-ui/RaisedButton';
import "./ListingCard.css";
import Slider from 'react-slick';



class ListingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //replace userId with stored cookie value
            userId: '5a8f3ab48896fd45f054117d',
            listing: this.props.listingInfo
        }
    }

    handleDecisionButton = (decision, event) => {
        console.log(this.state.listing._id);
        this.props.onDecision(decision, this.state.listing._id);
    }



    render() {
        let sliderSettings = {
            dots: true
        };

        return (
            <Card style={{ width: '400px' }} rounded={true} className="card" >
                <CardMedia overlay={<CardTitle title={this.props.title} />}>
                    <div className="img-slider-container">
                        <Slider {...sliderSettings}>
                            <LazyLoad height={200} >
                                <img alt="" src={this.props.listingInfo.picturePath} />
                            </LazyLoad>
                        </Slider>
                    </div>
                </CardMedia>
                <CardActions>
                    <div className="matching-button-container">
                        <RaisedButton className="matching-buttons" secondary={true} onClick={this.handleDecisionButton.bind(this, "No")} label="No" />
                        <RaisedButton className="matching-buttons" primary={true} onClick={this.handleDecisionButton.bind(this, "Yes")} label="Yes" />
                    </div>
                </CardActions>
            </Card>
        )
    }
}

export default ListingCard;