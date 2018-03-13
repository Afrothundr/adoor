const passport = require('passport');
const router = require("express").Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.route('/callback')
	.get(passport.authenticate('facebook',{
		successRedirect: '/',
		failure: '/error'
}));


router.route('/')
	.get(passport.authenticate('facebook',{
		scope:['email']
}));

router.route('/user')
	.post( function (req, res) {
		User.findOne({ facebookId: req.body.userID })
			.then((existingUser) => {
				if (existingUser) {
					console.log("Facebook User already exists");				
					res.json(existingUser);
				} else {
					
						//we want to create a new user
						//User model instance						
						let name = req.body.name;
						let spacePosition = name.search(" ");
						let fbFirstName = name.substring(0,spacePosition);
						let fbLastName = name.substring(spacePosition + 1, name.length);
						const newUser = new User({
							facebookId: req.body.userID,
							firstName: fbFirstName,
							lastName: fbLastName,
							email: req.body.email
						})
							.save(function (err) {
								if (err) return handleError(err);
								// saved!
								console.log("user saved!")
							})
							.then(() =>{
								console.log("user saved!");
								res.json(newUser);
							});
							
							
					}
			});
});

module.exports = router;