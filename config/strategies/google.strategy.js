const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../../models');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

module.exports = function(){

	//Plug google strategy into passport
	passport.use(new GoogleStrategy({
		clientID: '786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com',
		clientSecret: 'yGWrMDHR6s87L9Mk0NaAfTnW',
		callbackURL: '<callback for new adoor app here> change to localhost for now'},
		function(token, tokenSecret, profile, done){
			let user = {};

			user.email = profile.emails[0].value;
			user.image = profile._json.image.url;
			user.displayName = profile.displayName;
			user.firstName = profile.name.givenName;
			user.lastName = profile.name.familyName;

			user.google = {};
			user.google.id = profile.id;
			user.google.token = token;

			let dbUser = db.user.findOrCreate({where: {email: user.email} ,defaults: {firstName: user.firstName, lastName: user.lastName}})
 	        	.spread((user, created) => {
 	        		 localStorage.clear();
 	            	 localStorage.setItem("currentUserID", user.id);
 	            	 console.log(user.get({
 	             	plain: true
 		    	}));
 	       	});


			done(null, dbUser);
		}
	));

};