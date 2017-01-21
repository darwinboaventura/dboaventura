module.exports = function(app) {
	var Work = app.models.work;
	var Controller = {};
	var sanitize = require('mongo-sanitize');

	// Methods
	Controller.list = function(req, res) {
		Work.find().exec().then(function(works) {
			res.json(works);
		}, function(error) {
			console.error(error);
			res.status(500).json(error);
		});
	};

	Controller.get = function(req, res) {
		var id = sanitize(req.params.id);

		Work.findById(id).exec().then(function(work) {
			if (!work) throw new Error("Nenhuma trabalho encontrada com esse ID");

			res.json(work);
		}, function(error) {
			console.log(error);
			res.status(404).json(error);
		});
	};

	Controller.remove = function(req, res) {
		var id = sanitize(req.params.id);

		Work.remove({"_id": id}).exec().then(function(){
			res.status(204).end();
		}, function(error) {
			return console.error(error);
		});
	};

	Controller.save = function(req, res) {
		var id = sanitize(req.body._id);

		var data = {
			title: req.body.title,
			technologies: req.body.technologies,
			thumbnail: req.body.thumbnail,
			link: req.body.link
		};

		if (id) {
			Work.findByIdAndUpdate(id, data).exec().then(function(work) {
				data._id = id;
				res.json(data);
			}, function(error) {
				console.error(error);
				res.status(500).json(error);
			});
		} else {
			Work.create(data).then(function(work) {
				res.status(201).json(work);
			}, function(error) {
				console.log(error);
				res.status(500).json(error);
			});
		}
	};

	return Controller;
};