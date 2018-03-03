const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done)=>{
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

module.exports = function(){

	//Plug google strategy into passport
	passport.use(new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'},
		(token, tokenSecret, profile, done)=>{

			User.findOne({googleId: profile.id})
				.then((existingUser) => {
					if(existingUser){
						//we already have a record with the profile id
						done(null, existingUser);
					}else{
						//we want to create a new user
						//User model instance
						new User({
							googleId: profile.id,
							firstName: profile.name.givenName,
							lastName: profile.name.familyName,
							email: profile.emails[0].value
						})
							.save()
							.then(user => done(null, user));
					}
				});


			console.log("Profile obj in google strategy: " + profile);

		}
	));

};