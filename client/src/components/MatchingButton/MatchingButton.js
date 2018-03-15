import React, { Component} from "react";
import './button.css';
import Drawer from 'material-ui/Drawer';
import MyMatches from "..//myMatches/myMatches.js";
import RaisedButton from 'material-ui/RaisedButton';


class MatchingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});
     
    onRequestChange = open => this.setState({open});

    render() {
        return (
          <div className='container'>  
          <div>
            <RaisedButton
              label="My Matches"
              onClick={this.handleToggle}
            />
        </div>
        <div className='drawer'>
            <Drawer
              docked={false}
              width={'50%'}
              height={'100%'}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
            <h2>Your Matches</h2>
            <MyMatches style={{width:'100%'}} />

            </Drawer>
            </div>
          </div>
        );
      }
    }

export default MatchingButton




