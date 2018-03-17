//dependencies
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");
const User = require('./models/User');
const Preference  = require('./models/Preference');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const keys = require('./config/keys');
const dotenv = require('dotenv');


//instances
const app = express();
const router = express.Router();


// app.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: [keys.cookieKey]
//     })
// );

//setup port
const port = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("/client/build"));
console.log(__dirname);
// Add routes, both API and view
app.use(router);

//Passport and Express-Session logic
app.use(session({secret: 'anything'}));


// Set up promises with mongoose
mongoose.Promise = global.Promise;

//db config update parameter to keys.mongoURI
console.log(process.env.DB_USER);
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`,
{
    useMongoClient: true
});

require('dotenv').config();

app.set('port', (process.env.PORT || 3001));
//init API
router.get('/', (req, res) => {
    res.json({message: 'API Initialized!'});
});

//use router when we call /api
app.use(routes);

//start server
app.listen(port, () => {
    console.log(`api running on ${port}!`);
})

