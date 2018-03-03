//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");
const User = require('./models/User');
const Preference  = require('./models/Preference');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

//instances
const app = express();
const router = express.Router();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//setup port
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(router);

//Passport and Express-Session logic
app.use(session({secret: 'anything'}));

//Access oauth strategies
require('./config/passport')(app);
require("./routes/auth/google-auth-routes")(router);


// Set up promises with mongoose
mongoose.Promise = global.Promise;

//db config update parameter to keys.mongoURI
mongoose.connect('mongodb://admin:1111@ds225028.mlab.com:25028/adoor',
{
    useMongoClient: true
  });

//init API
router.get('/', (req, res) => {
    res.json({message: 'API Initialized!'});
});

//use router when we call /api
app.use(routes);

//start server
app.listen(PORT, () => {
    console.log(`api running on ${PORT}!`);
})

