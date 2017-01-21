module.exports = function(app) {
	var Controller = app.controllers.contact;

	app.route('/contact')
		.get(Controller.list)
		.post(Controller.save);

	app.route('/contact/:id')
		.get(Controller.get)
		.delete(Controller.remove);
};