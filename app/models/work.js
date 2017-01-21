var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		title: {
			type: String,
			required: true
		},
		technologies: {
			type: String,
			required: true
		},
		thumbnail: {
			type: String,
			required: true
		},
		link: {
			type: String
		}
	});

	return mongoose.model('Work', schema);
};