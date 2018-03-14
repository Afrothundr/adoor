import React, { Component } from "react";
import API from '../../utils/API';
import ZipCodes from '../../utils/zipcodes'
import { Route, Redirect } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { DropDownMenu, MenuItem } from 'material-ui/DropDownMenu';
import Slider from 'material-ui/Slider';
import "./UserPrefQuiz.css";

class UserPrefQuiz extends Component {
    constructor() {
        super();
        //intial state
        var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
        this.state = {
            //replace userId with stored cookie value
            userId: cookieValue,
            zipcode: 64111,
            bedrooms: 2,
            bathrooms: 2,
            formOne: 'inline-block',
            formTwo: 'none',
            preferencesCreated: false
        }
    }


    //functions
    toFormTwo = event => {
        this.setState({
            formOne: 'none',
            formTwo: 'inline-block'
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //create user prefs
        let userPref = this.calculatePrefs();
        //store preferences in database and update user object
        API.createPref(userPref)
            .then((preferences) => {
                console.log(preferences.data);
                this.setState({
                    preferencesCreated: true
                })

            }).catch(err => console.log(err));
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleZipCodeChange = (event, index, value) => {
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

    calculatePrefs = () => {
        let schools = false;
        let grocery = false;
        let hospitals = false;
        let saftey = false;
        let parks = false;

        if (this.state.kids === 'true') {
            grocery = true;
        } if (this.state.age > 0 && this.state.age < 20) {
            schools = true;
            hospitals = true;
        } if (this.state.security === 'true') {
            saftey = true;
        } if (this.state.pets === 'true') {
            parks = true;
        }

        return {
            userId: this.state.userId,
            caresAboutSchools: schools,
            caresAboutGroceryStores: grocery,
            caresAboutHospitals: hospitals,
            caresAboutCrimes: saftey,
            caresAboutParks: parks,
            zipcode: this.state.zipcode,
            budget: this.state.budget,
            bedrooms: this.state.bedrooms,
            bathrooms: this.state.bathrooms
        };
    }

    //JSX Render
    render() {
        //input form
        return (
            <form className="wrapper-form" onSubmit={this.handleSubmit}>
                <div style={{ display: this.state.formOne }}>
                    <h1>Just a few questions...</h1>
                    <hr />
                    <h3>Do You Have Kids?</h3>
                    <RadioButtonGroup name="kids" onChange={this.handleChange}>
                        <RadioButton value={true} label="Yes" style={{ display: 'inline-block', width: 'auto', margin: "0px 5px" }} />
                        <RadioButton value={false} label="No" style={{ display: 'inline-block', width: 'auto', margin: "0px 5px" }} />
                    </RadioButtonGroup>

                    <h3>If so, how old is your youngest?</h3>
                    <RadioButtonGroup name="age" onChange={this.handleChange}>
                        <RadioButton value={0} label="NA" />
                        <RadioButton value={5} label="0-5" />
                        <RadioButton value={10} label="5-10" />
                        <RadioButton value={15} label="10-15" />
                        <RadioButton value={20} label="15-20" />
                        <RadioButton value={25} label="20+" />
                    </RadioButtonGroup>

                    <h3>Do You Like Living by Yourself?</h3>
                    <RadioButtonGroup name="security" onChange={this.handleChange}>
                        <RadioButton value={true} label="Yes" style={{ display: 'inline-block', width: 'auto', margin: "0px 5px" }} />
                        <RadioButton value={false} label="No" style={{ display: 'inline-block', width: 'auto', margin: "0px 5px" }} />
                    </RadioButtonGroup>

                    <h3>Do you have any pets?</h3>
                    <RadioButtonGroup name="pets" onChange={this.handleChange}>
                        <RadioButton value={true} style={{ display: 'inline-block', width: 'auto', margin: "0px 5px" }} label="Yes" />
                        <RadioButton value={false} style={{ display: 'inline-block', width: 'auto', margin: "0px 5px" }} label="No" />
                    </RadioButtonGroup>
                    <div>
                        <RaisedButton className="next-button" onClick={this.toFormTwo} id="next-button" primary={true} label="Next" type="Next" />
                    </div>
                </div>
                <div style={{ display: this.state.formTwo }}>
                    <h3>How Many Bedrooms?</h3>
                    <p>{this.state.bedrooms}</p>
                    <Slider name="bedroomSlider" defaultValue={2} min={1} max={7} step={1} onChange={this.handleBedroomSliderChange} />

                    <h3>How Many Bathrooms?</h3>
                    <p>{this.state.bathrooms}</p>
                    <Slider name="bathroomSlider" defaultValue={2} min={1} max={7} step={1} onChange={this.handleBathroomSliderChange} />


                    <h3>What's Your Budget?</h3>
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

                    <h3>What Zipcode Would You Like to Live In?</h3>
                    <DropDownMenu value={this.state.zipcode} maxHeight={200} onChange={this.handleZipCodeChange} name="zipcode" >
                        {
                            ZipCodes.map(zipcode => {
                                return <MenuItem key={zipcode} value={zipcode} primaryText={zipcode} />
                            })
                        }
                    </DropDownMenu>
                    <div>
                        <RaisedButton className="submit-button" primary={true} label="Submit" type="submit" />
                    </div>
                </div>
                <div>
                    {this.state.preferencesCreated && (
                        <Redirect to={"/matching"} />
                    )}
                </div>
            </form>
        );
    }
}

//export User Pref Quiz
export default UserPrefQuiz;