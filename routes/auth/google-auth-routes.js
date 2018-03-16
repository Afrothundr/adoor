const express = require('express');
const passport = require('passport');
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Seller = mongoose.model('Seller');
const googleStrategy = require('../../config/strategies/google.strategy');


const whitelist = ['https://accounts.google.com/', 'http://accounts.google.com/', "http:localhost:3000"]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


router.route('/callback')
	.get(passport.authenticate('google',{
		failureRedirect: '/error'}), function(req, res){
			res.redirect('/');
		}, cors(corsOptions));

router.route('/')
	.get(passport.authenticate('google',{
		scope:['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
	
}));

router.route('/api/logout')
	.post(function (req, res) {
	req.logout();
	res.send(req.user);
});

router.route('/auth/create')

router.route('/api/current_user', (req, res) => {
	res.send(req.user);
	console.log(req.user);
});

router.route('/user')
	.post( function (req, res) {
		console.log(req.body.profileObj.googleId);
		User.findOne({ googleId: req.body.profileObj.googleId })
			.then((existingUser) => {
				if (existingUser) {
					console.log("User already exists");
					res.json(existingUser);
				} else {
						//we want to create a new user
						//User model instance
						const newUser = new User({
							googleId: req.body.profileObj.googleId,
							firstName: req.body.profileObj.givenName,
							lastName: req.body.profileObj.familyName,
							email: req.body.profileObj.email
						})
						.save(function (err) {
							if (err) return handleError(err);
							// saved!
							console.log("user saved!")
						})
						.then((newUser) =>{
							console.log("user saved!");
							res.json(newUser);
						});
					}
			});
});


router.route('/seller')
	.post( function (req, res) {
		console.log(req.body.profileObj.googleId);
		Seller.findOne({ googleId: req.body.profileObj.googleId })
			.then((existingSeller) => {
				if (existingSeller) {
					console.log("User already exists");
					res.json(existingSeller);
				} else {
						//we want to create a new user
						//User model instance
						const newSeller = new Seller({
							googleId: req.body.profileObj.googleId,
							firstName: req.body.profileObj.givenName,
							lastName: req.body.profileObj.familyName,
							email: req.body.profileObj.email
						})
						.save(function (err) {
							if (err){console.log(err)} 
							
							// saved!
							console.log("user saved!")
						})
						.then((newSeller) =>{
							console.log("user saved!");
							res.json(newSeller);
						});
					}
			});
});
module.exports = router;
