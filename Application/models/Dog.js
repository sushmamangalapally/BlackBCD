var mongoose = require("mongoose");

var DogSchema = mongoose.Schema({
    name: String,
    age: Number
})

mongoose.model('Dog', DogSchema);