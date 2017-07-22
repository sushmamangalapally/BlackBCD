var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');

function UsersController(){
	this.index = function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		User.find({}, function(err, users){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				res.json(users);
			}
		})		
	}
	this.create = function(req, res){
		console.log('fourth: create function users controller /server/controllers/users.js');		
		User.create(req.body, function(err, user){
			console.log("sending json back to user factory check browser console")				
			if(err){
				// console.log(err);
				res.json({error: true, errors: err});
			} else {
				res.json(user);
			}
		})
	}
	this.show = function(req, res){
		// retrieve single user
		// this is how we retrieve the users id
		console.log(req.body.id)
	}
}

module.exports = new UsersController();