//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//instances
const app = express();
const router = express.Router();

//setup port
const port = process.env.API_PORT || 3000;

//db config
mongoose.connect('mongodb://admin:1111@ds225028.mlab.com:25028/adoor');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Allow CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
   //and remove cacheing
    res.setHeader('Cache-Control', 'no-cache');
    next();
   });
   //now we can set the route path & initialize the API
   router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
   });

//init API
router.get('/', (req, res) => {
    res.json({message: 'API Initialized!'});
});

//use router when we call /api
app.use('/api', router);

//start server
app.listen(port, () =>{
    console.log(`api running on ${port}!`);
})

