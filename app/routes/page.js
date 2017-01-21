module.exports = function(app) {
	var Controller = app.controllers.page;
	var Auth = app.services.auth;

	app.route('/page')
		.get(Controller.list)
		.post(Auth.isAuthenticated, Controller.save);

	app.route('/page/:id')
		.get(Controller.get)
		.delete(Auth.isAuthenticated, Controller.remove);
};