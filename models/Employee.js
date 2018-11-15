var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
	first_name: String,
	last_name: String, 
	email: String,
	department: String,
	job_title: String,
	city: String,
	state: String,
	avatar: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);

