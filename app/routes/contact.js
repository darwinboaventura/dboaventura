module.exports = function(app) {
	var Controller = app.controllers.contact;
	var Auth = app.services.auth;

	app.route('/contact')
		.get(Auth.isAuthenticated, Controller.list)
		.post(Controller.save);

	app.route('/contact/:id')
		.get(Auth.isAuthenticated, Controller.get)
		.delete(Auth.isAuthenticated, Controller.remove);
};