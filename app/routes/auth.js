var passport = require('passport');

module.exports = function(app) {
	app.post('/auth/login', passport.authenticate('local', { failureFlash: true }), function(req, res) {
		res.status(200).send('Authorized');
	});

	app.get('/auth/logout', function(req, res) {
		req.logOut();
		res.send('O usuário foi desconectado');
	});
};