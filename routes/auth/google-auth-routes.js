
const express = require('express');
const passport = require('passport');
const router = express.Router();




router.route('/callback')
	.get(passport.authenticate('google',{
		failureRedirect: '/error'}), function(req, res){
			res.redirect('/survey');
		});
// app.get('/auth/google/callback', passport.authenticate('google'));

router.route('/')
	.get(passport.authenticate('google',{
		scope:['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
	
}));

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
