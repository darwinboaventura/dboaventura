module.exports = function(app) {
	var Controller = app.controllers.work;
	var Auth = app.services.auth;

	app.route('/work')
		.get(Controller.list)
		.post(Auth.isAuthenticated, Controller.save);

	app.route('/work/:id')
		.get(Controller.get)
		.delete(Auth.isAuthenticated, Controller.remove);
};