var mongoose = require("mongoose");
var Dog = mongoose.model("Dog");


function DogController(){
    this.index = function(req, res){
        console.log('IN THE DOG CONTROLLER');
    }
}

module.exports = new DogController();

