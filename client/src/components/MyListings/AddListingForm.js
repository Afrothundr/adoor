import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import TextField from 'material-ui/TextField';
import { DropDownMenu, MenuItem } from 'material-ui/DropDownMenu';
import Slider from 'material-ui/Slider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import axios from 'axios';
import ZipCodes from '../../utils/zipcodes';
import Keys from '../../utils/keys';
import './AddListingForm.css';


const CLOUDINARY_UPLOAD_PRESET = 'uz4557ai';
const CLOUDINARY_UPLOAD_URL = '	https://api.cloudinary.com/v1_1/dgha5r7ax/upload';

class AddListingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //replace userId with stored cookie value
            sellerId: '5a8f3ab48896fd45f054117d',
            zipcode: 64111,
            bedrooms: 2,
            bathrooms: 2,
            imgUploadUrls: []
        }

    }

    handleZipChange = (event, index, value) => {
        this.setState({ zipcode: value });
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


handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", this.state.sellerId);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
      formData.append("api_key", Keys.cloudinary); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log(fileURL);
        this.setState(state => {
            state.imgUploadUrls.push(fileURL);
            return {imgUploadUrls: state.imgUploadUrls}
        })
        
        console.log(data);
      })
    });
  
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
      alert('Successful Upload');
    });
  }

    render() {
        const dropzoneStyles = {
            width: '300px',
            border: "1px solid black",
            margin: "15px auto"
        }
        return (
            <form>
                <h1>Add Listing</h1>
                <div>
                    <TextField floatingLabelText="Address" />
                </div>
                <div>
                    <TextField floatingLabelText="City" />
                </div>
                <h3>What's the Zipcode?</h3>
                <DropDownMenu value={this.state.zipcode} maxHeight={200} onChange={this.handleZipChange} name="zip" >
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

                <Dropzone style={dropzoneStyles}
                    multiple={true}
                    accept="image/*"
                    onDrop={this.handleDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>

                <div className="container">
                    {this.state.imgUploadUrls.map(url => {
                        return (
                            <img className='imgPreview' alt="" src={url} key={url}/>
                        )
                    })}
                </div>

            </form>
        );
    }



}//end of class

export default AddListingForm;