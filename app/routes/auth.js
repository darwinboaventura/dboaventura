var passport = require('passport');

module.exports = function(app) {
	app.post('/auth/login', passport.authenticate('local', { failureRedirect: '/login' }));

	app.get('/auth/logout', function(req, res) {
		req.logOut();
		res.redirect('/');
	});
};