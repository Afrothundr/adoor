const passport = require('passport');
const router = require("express").Router();

router.route('/callback')
	.get(passport.authenticate('facebook',{
		successRedirect: '/matching',
		failure: '/error/'
}));


router.route('/')
	.get(passport.authenticate('facebook',{
		scope:['email']
}));

module.exports = router;