
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.route('/facebook/callback')
	.get(passport.authenticate('facebook',{
		successRedirect: '/matching',
		failure: '/error/'
}));


router.route('/facebook')
	.get(passport.authenticate('facebook',{
		scope:['email']
}));

module.exports = router;