import React, { Component } from "react";
import API from '../../utils/API';
import ZipCodes from '../../utils/zipcodes'
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { DropDownMenu, MenuItem } from 'material-ui/DropDownMenu';


class UserPrefQuiz extends Component {
    constructor() {
        super();
        //intial state
        this.state = {
            //replace userId with stored cookie value
            userId: '5a8df22e0beba811104ca437',
            zipcode: 64111
        }
    }
    //on submit
    handleSubmit = event => {
        event.preventDefault();
        //logic for determining user preferences
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
        
        var newQuizInfo = {
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

        console.log(newQuizInfo);
        //store preferences in database and update user object
        API.createPref(newQuizInfo)
        .then((preferences) => {
            console.log(preferences.data);
        }).catch(err => console.log(err));
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleZipCodeChange = (event, index, value) => {
        this.setState({zipcode: value});
    }

    render() {
        //input form
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Just a few questions...</h1>
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
                    <RadioButton value={true} label="Yes" />
                    <RadioButton value={false} label="No" />
                </RadioButtonGroup>

                <h3>How Many Bedrooms?</h3>
                <RadioButtonGroup name="bedrooms" onChange={this.handleChange}>
                    <RadioButton value={1} label="1" />
                    <RadioButton value={2} label="2" />
                    <RadioButton value={3} label="3" />
                    <RadioButton value={4} label="4" />
                    <RadioButton value={5} label="5" />
                    <RadioButton value={6} label="6" />
                    <RadioButton value={7} label="7" />
                </RadioButtonGroup>

                <h3>How Many Bathrooms?</h3>
                <RadioButtonGroup name="bathrooms" onChange={this.handleChange}>
                    <RadioButton value={1} label="1" />
                    <RadioButton value={2} label="2" />
                    <RadioButton value={3} label="3" />
                    <RadioButton value={4} label="4" />
                    <RadioButton value={5} label="5" />
                    <RadioButton value={6} label="6" />
                    <RadioButton value={7} label="7" />
                </RadioButtonGroup>

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
                    <RaisedButton primary={true} label="Submit" type="submit" />
                </div>
            </form>
        );
    }
}

//export User Pref Quiz
export default UserPrefQuiz;