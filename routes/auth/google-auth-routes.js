
const express = require('express');
const passport = require('passport');
const router = express.Router();
const cors = require('cors');

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
// app.get('/auth/google/callback', passport.authenticate('google'));

router.route('/')
	.get(passport.authenticate('google',{
		scope:['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
	
}), cors());

router.route('/api/logout', (req, res) => {
	req.logout();
	res.send(req.user);
});

router.route('/auth/create')

router.route('/api/current_user', (req, res) => {
	res.send(req.user);
	console.log(req.user);
});



module.exports = router;
