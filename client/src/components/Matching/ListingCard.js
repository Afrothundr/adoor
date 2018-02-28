import React, { Component } from "react";
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import "./ListingCard.css";
import Slider from 'react-slick';


class ListingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //replace userId with stored cookie value
            userId: '5a8f3ab48896fd45f054117d'
        }
    }

    handleDecisionButton = (decision, event) => {
    console.log(decision);
       this.props.onDecision(decision);
    }



    render() {
        let sliderSettings = {
            dots: true
          };
        return(
            <Card style={{width: '400px'}} rounded={true} className="card" >
                <CardMedia overlay={<CardTitle title={this.props.title} subtitle="Overlay subtitle" />}>
                    <div className="img-slider-container">
                        <Slider {...sliderSettings}>
                            <img alt="" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20a3a8b585459d8281ca3dde12a865b5&auto=format&fit=crop&w=1050&q=80"/>
                            <img alt="" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20a3a8b585459d8281ca3dde12a865b5&auto=format&fit=crop&w=1050&q=80"/>
                            <img alt="" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20a3a8b585459d8281ca3dde12a865b5&auto=format&fit=crop&w=1050&q=80"/>
                        </Slider>
                    </div>
                </CardMedia>
                <CardActions>
                    <div className="matching-button-container">
                        <RaisedButton className="matching-buttons" secondary={true} onClick={this.handleDecisionButton.bind(this, "No")} label="No"/>
                        <RaisedButton className="matching-buttons" primary={true} onClick={this.handleDecisionButton.bind(this, "Yes")} label="Yes"/>
                    </div>
                </CardActions>
            </Card>
        )
    }
}

export default ListingCard;