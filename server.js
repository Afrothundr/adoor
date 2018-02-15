//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//instances
const app = express();
const router = express.Router();

//setup port
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(router);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

//db config
mongoose.connect('mongodb://admin:1111@ds225028.mlab.com:25028/adoor',
{
    useMongoClient: true
  });

//init API
router.get('/', (req, res) => {
    res.json({message: 'API Initialized!'});
});

//use router when we call /api
app.use('/api', router);

//start server
app.listen(PORT, () =>{
    console.log(`api running on ${PORT}!`);
})

