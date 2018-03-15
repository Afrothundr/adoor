import React, { Component } from "react";
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import "./ListingCard.css";
import Slider from 'react-slick';



class ListingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: this.props.listingInfo
        }
    }

    handleDecisionButton = (decision, event) => {
        console.log(this.state.listing._id);
        this.props.onDecision(decision, this.state.listing._id);
    }

    cropImage = (url) => {
        var frontUrl = url.slice(0, 49);
        var backUrl = url.slice(49);
        var crop = '/c_scale,w_500'
        var finalUrl = frontUrl + crop + backUrl
        return finalUrl;
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
                            {this.props.listingInfo.picturePath.map(picture => {
                                let croppedImage = this.cropImage(picture);
                                return (
                                    <div data-index={picture} key={picture}>
                                        <img alt="" className="listing-photo" style={{ width: "400px" }} src={croppedImage} />
                                    </div>
                                )
                            })}
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