module.exports = function(app) {
	var Contact = app.models.contact;
	var Controller = {};
	var sanitize = require('mongo-sanitize');

	// Methods
	Controller.list = function(req, res) {
		Contact.find().exec().then(function(contacts) {
			res.json(contacts);
		}, function(error) {
			console.error(error);
			res.status(500).json(error);
		});
	};

	Controller.get = function(req, res) {
		var id = sanitize(req.params.id);

		Contact.findById(id).exec().then(function(contact) {
			if (!Contact) throw new Error("Nenhuma trabalho encontrada com esse ID");

			res.json(contact);
		}, function(error) {
			console.log(error);
			res.status(404).json(error);
		});
	};

	Controller.remove = function(req, res) {
		var id = sanitize(req.params.id);

		Contact.remove({"_id": id}).exec().then(function(){
			res.status(204).end();
		}, function(error) {
			return console.error(error);
		});
	};

	Controller.save = function(req, res) {
		var id = sanitize(req.body._id);

		var data = {
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			message: req.body.message,
			seen: req.body.seen
		};

		if (id) {
			Contact.findByIdAndUpdate(id, data).exec().then(function(contact) {
				data._id = id;

			    res.json(data);
			}, function(error) {
				console.error(error);
				res.status(500).json(error);
			});
		} else {
			Contact.create(data).then(function(contact) {
				app.mailer.send('email', {
					to: 'darwinboaventura@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
					subject: 'Novo Contato - dboaventura portfólio', // REQUIRED.
					otherProperty: data // All additional properties are also passed to the template as local variables.
				}, function (err) {
					if (err) {
					// handle error
						console.log(err);

						res.send('There was an error sending the email');

						return;
					}

					console.log("Email sent!");
				});

				res.status(201).json(contact);
			}, function(error) {
				console.log(error);
				res.status(500).json(error);
			});
		}
	};

	return Controller;
};