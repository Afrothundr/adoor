import React, { Component } from "react";
import ReactDOM from 'react-dom';

// placeholder image. need to exchange with logo image
const logo = "http://via.placeholder.com/350x150";
// placeholder image. Need to echange with a stock image of a home
const stockImg = "http://via.placeholder.com/350x150";
const tagLineHeader = "About Adoor"
const tagLineText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim porta fermentum. Aenean maximus justo vestibulum eleifend fringilla. Donec et elementum orci. Maecenas consequat dolor auctor turpis vestibulum porta. Maecenas pellentesque, tortor sit amet ullamcorper condimentum, nisi nisl venenatis tortor, ac rutrum sapien purus ut velit.";

class StandardSideBar extends Component {
    render() {
        return (
          <div className="standard-sidebar">
           <div><img src={logo} /></div>
           <div>
               <h2>{tagLineHeader}</h2>
               <p>{tagLineText}</p>
           </div>
           <div><img src={stockImg} /></div>
          </div>
        );
      }

    }

export default StandardSideBar;