var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		title: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	});

	return mongoose.model('Page', schema);
};