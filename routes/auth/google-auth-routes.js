
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.route('/callback')
	.get(passport.authenticate('google',{
		failureRedirect: '/error'}), function(req, res){
			res.redirect('/survey');
		});


router.route('/')
	.get(passport.authenticate('google',{
		scope:['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
}));

module.exports = router;
