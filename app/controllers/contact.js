module.exports = function(app) {
	var Contact = app.models.contact;
	var Controller = {};
	var sanitize = require('mongo-sanitize');
	var nodemailer = require('nodemailer');

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
			message: req.body.message
		};

		if (id) {
			Contact.findByIdAndUpdate(id, data).exec().then(function(contact) {
				data._id = id;

				var transporter = nodemailer.createTransport({
			        service: 'Gmail',
			        auth: {
			            user: 'darwinboaventura@gmail.com', // Your email id
			            pass: '@9ihwsmttma' // Your password
			        }
			    });

			    var emailMessage = '<strong>Nome: </strong> ' + data.name + '<br />';
			    emailMessage += '<strong>E-mail: </strong> ' + data.email + '<br />';
			    emailMessage += '<strong>Telefone: </strong> ' + data.phone + '<br />';
			    emailMessage += '<strong>Mensagem: </strong> ' + data.message + '<br />';

				var mailOptions = {
					from: 'darwinboaventura@gmail.com', // sender address
					to: 'darwinboaventura@gmail.com', // list of receivers
					subject: 'Novo Contato - dboaventura portfólio', // Subject line
					html: emailMessage
				};

				transporter.sendMail(mailOptions, function(error, info) {
				    if(error){
				        console.log(error);
				        res.json({yo: 'error'});
				    }else{
				        console.log('Message sent: ' + info.response);
				    };
				});

			    res.json(data);
			}, function(error) {
				console.error(error);
				res.status(500).json(error);
			});
		} else {
			Contact.create(data).then(function(contact) {
				res.status(201).json(contact);
			}, function(error) {
				console.log(error);
				res.status(500).json(error);
			});
		}
	};

	return Controller;
};