module.exports = function(app) {
	var Controller = app.controllers.page;

	app.route('/page')
		.get(Controller.list)
		.post(Controller.save);

	app.route('/page/:id')
		.get(Controller.get)
		.delete(Controller.remove);
};