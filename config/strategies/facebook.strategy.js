const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(){

	passport.use(new FacebookStrategy({
		clientID: '927418800748086',
		clientSecret: '5516c73f7792f37ff054048f8dc1931f',
		callbackURL: '<new adoor callback url for now update to localhost>',
		passReqToCallback: true
	},
	function(req, accessToken, refreshToken, profile, done){
		console.log("IN FACEBOOK STRATEGY");
		// let user = {};
		// user.displayName = profile.displayName;

		// user.facebook = {};
		// user.facebook.id = profile.id;
		// user.facebook.token = accessToken;

		// done(null, user);

	}));
};