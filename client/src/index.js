import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./index.css"



ReactDOM.render(
    <MuiThemeProvider>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>,
document.getElementById('root'));

