module.exports = function(app) {
	var Page = app.models.page;
	var Controller = {};
	var sanitize = require('mongo-sanitize');

	Controller.list = function(req, res) {
		Page.find().exec().then(function(Pages) {
			res.json(Pages);
		}, function(error) {
			console.error(error);
			res.status(500).json(error);
		});
	};

	Controller.get = function(req, res) {
		var id = sanitize(req.params.id);

		Page.findById(id).exec().then(function(Page) {
			if (!Page) throw new Error("Nenhuma página encontrada com esse ID");

			res.json(Page);
		}, function(error) {
			console.log(error);
			res.status(404).json(error);
		});
	};

	Controller.remove = function(req, res) {
		var id = sanitize(req.params.id);

		Page.remove({"_id": id}).exec().then(function(){
			res.status(204).end();
		}, function(error) {
			return console.error(error);
		});
	};

	Controller.save = function(req, res) {
		var id = sanitize(req.body._id);

		var data = {
			title: req.body.title,
			text: req.body.text
		};

		if (id) {
			Page.findByIdAndUpdate(id, data).exec().then(function(Page) {
				data._id = id;
				res.json(data);
			}, function(error) {
				console.error(error);
				res.status(500).json(error);
			});
		} else {
			Page.create(data).then(function(Page) {
				res.status(201).json(Page);
			}, function(error) {
				console.log(error);
				res.status(500).json(error);
			});
		}
	};

	return Controller;
};