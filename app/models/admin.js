var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		login: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		password: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		}
	});

	return mongoose.model('Admin', schema);
};