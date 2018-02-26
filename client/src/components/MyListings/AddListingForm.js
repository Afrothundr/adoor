import React, { Component } from "react";
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import { DropDownMenu, MenuItem } from 'material-ui/DropDownMenu';
import Slider from 'material-ui/Slider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import cloudinary from 'cloudinary';
import ZipCodes from '../../utils/zipcodes';

class AddListingForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            //replace userId with stored cookie value
            userId: '5a8f3ab48896fd45f054117d',
            zipcode: 64111,
            bedrooms: 2,
            bathrooms: 2
        }
    }

    handleZipChange = (event, index, value) => {
        this.setState({zipcode: value});
    }

    handleBedroomSliderChange = (event, value) => {
        this.setState({
            bedrooms: value
        });
    }

    handleBathroomSliderChange = (event, value) => {
        this.setState({
            bathrooms: value
        });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }   


    uploadWidget() {
        console.log("In image widget");
        let _this = this;
        cloudinary.openUploadWidget({ cloud_name: 'dgha5r7ax', upload_preset: 'uz4557ai'},
           function(error, result) {
           // Update gallery state with newly uploaded image
                this.setState({gallery: _this.state.gallery.concat(result)})
            });
    }

    render(){
        return(
            <form>
                <h1>Add Listing</h1>
                <div>
                <TextField floatingLabelText="Address"/>
                </div>
                <div>
                <TextField floatingLabelText="City"/>
                </div>
                <h3>What's the Zipcode?</h3>
                <DropDownMenu value={this.state.zipcode} maxHeight={200} onChange={this.handleZipChange} name="zip" labelStyle="Zipcode">
                    {
                        ZipCodes.map(zipcode => {
                            return <MenuItem key={zipcode} value={zipcode} primaryText={zipcode} />
                        })
                    }
                </DropDownMenu>

                <h3>How Many Bedrooms?</h3>
                <p>{this.state.bedrooms}</p>
                <Slider name="bedSlider" defaultValue={2} min={1} max={7} step={1} onChange={this.handleBedroomSliderChange} />

                <h3>How Many Bathrooms?</h3>
                <p>{this.state.bathrooms}</p>
                <Slider name="bathSlider" defaultValue={2} min={1} max={7} step={1} onChange={this.handleBathroomSliderChange} />
                
                <h3>What's The Price?</h3>
                <RadioButtonGroup name="budget" onChange={this.handleChange}>
                    <RadioButton value={30000} label="< 50,000" />
                    <RadioButton value={75000} label="50,000 - 99,000" />
                    <RadioButton value={125000} label="100,000 - 149,999" />
                    <RadioButton value={175000} label="150,000 - 199,999" />
                    <RadioButton value={225000} label="200,000 - 249,999" />
                    <RadioButton value={275000} label="250,000 - 299,999" />
                    <RadioButton value={325000} label="300,000 - 349,999" />
                    <RadioButton value={375000} label="350,000 - 399,999" />
                    <RadioButton value={425000} label="400,000 - 449,000" />
                    <RadioButton value={475000} label="450,000 - 499,999" />
                    <RadioButton value={525000} label="500,000+ " />
                </RadioButtonGroup>
                
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
                
            </form>
        );
    }



}//end of class

export default AddListingForm;