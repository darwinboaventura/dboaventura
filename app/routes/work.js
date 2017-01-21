module.exports = function(app) {
	var Controller = app.controllers.work;

	app.route('/work')
		.get(Controller.list)
		.post(Controller.save);

	app.route('/work/:id')
		.get(Controller.get)
		.delete(Controller.remove);
};