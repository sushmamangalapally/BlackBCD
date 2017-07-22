var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String
});
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will be used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later
mongoose.model('User', UserSchema);

// Custom Validations for user schema
UserSchema.path('first_name').required(true, 'First Name cannot be blank');
UserSchema.path('last_name').required(true, 'Last Name cannot be blank');
UserSchema.path('email').required(true, 'Email cannot be blank');