var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    username: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]

})

mongoose.model("User", UserSchema)