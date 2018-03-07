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
const cors = require('cors');
const whitelist = ['https://accounts.google.com'];

//instances
const app = express();
const router = express.Router();


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// app.use(passport.initialize());
// app.use(passport.session());
var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
  };
app.use(cors(corsOption));

//try this underneath cors 
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//    //and remove cacheing so we get the most recent comments
//     res.setHeader('Cache-Control', 'no-cache');
       next();
   });

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
require("./routes/auth/google-auth-routes");


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

