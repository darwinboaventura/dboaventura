var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		phone: {
			type: String
		},
		message: {
			type: String,
			required: true
		},
		seen: {
			type: Number,
			required: true,
			default: 0
		}
	});

	return mongoose.model('Contact', schema);
};