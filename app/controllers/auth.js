module.exports = function(app) {
	var Controller = {};

	Controller.isAuthenticated = function(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.status(401).json('Você não tem autorização, por favor faça o login.');
		}
	};

	return Controller;
};