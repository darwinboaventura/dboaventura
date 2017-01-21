var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	var Admin = mongoose.model('Admin');

	passport.use(new LocalStrategy(function(username, password, done) {
		Admin.findOne({ login: username, password: password}, function(err, admin) {
			if (err) { return done(err) };

			if (!admin) { return done(null, false) };

			return done(null, admin);
		});
	}));

	passport.serializeUser(function(admin, done) {
		done(null, admin._id);
	});

	passport.deserializeUser(function(id, done) {
		Admin.findById(id).exec().then(function(admin) {
			done(null, admin);
		});
	});
};