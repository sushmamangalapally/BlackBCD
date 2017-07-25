var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');

module.exports = {
	register: function(req, res){
        console.log(req.body, "this is the user controler");
        User.findOne({username: req.body.username}, function(err, user){
            if(err){
                res.status(500).json({message: "Ahhh"})
            }
            else{
                if(user){
                    if(user.password == req.body.password){
                        res.json({user: user, message: "Authenticated"})
                    }
                    else{
                        res.status(401).json({message: "Password or username do not match or aleady taken"})
                    }
                }
                else{
                    var user = new User(req.body)
                    user.save(function(err){
                        if(err){
                            console.log("error")
                            res.status(501).json({message: "AHH"})
                        }
                        else{
                            res.json({user: user, message: "Created"})
                        }
                    })
                }
            }
        })
	},
	finduser: function(res, req){
		console.log("I am in controller of users.js (server) in showusers")
        // console.log(req.body)
        // User.findOne({_id: req.body}, function(err, user){
        //     if(err){
        //         console.log(err)
        //         res.status(500).json({message: "Ahhh"})
        //     }
        //     else{
        //         res.json({user: user})

        //     }
        // })		
	}

}


