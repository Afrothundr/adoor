const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../keys');
const mongoose = require('mongoose');
const userController = require('../../controllers/userController');

const User = mongoose.model('User');

// passport.serializeUser((user, done) => {
// 	done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
// 	User.findById(id)
// 		.then(user => {
// 			done(null, user);
// 		});
// });

module.exports = {
//googleStrategy = {
	addUser: function(response) {

		// User.findOne({ googleId: response.id })
		// 	.then((existingUser) => {
		// 		if (existingUser) {
		// 			//we already have a record with the profile id
		// 			//done(null, existingUser);
		// 		} else {
		// 			//we want to create a new user
		// 			//User model instance
					console.log(response);
					new User({
						googleId: response.id,
						firstName: response.givenName,
						lastName: response.name.familyName,
						email: response.emails[0].value
					})
						.save()
			// 			.then(console.log("user saved!"));
			// // 	}
			// // });

	}
}

// module.exports = googleStrategy;



