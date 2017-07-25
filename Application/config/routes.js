var path = require('path')
var user = require('../controllers/users.js')
var question = require('../controllers/questions.js')

module.exports = function(app){
    app.post('/register', user.register);
    app.post('/findinguser', user.finduser);
    app.get('/allquestions', question.allquestions)
    app.post('/addquestions', question.addquestion)
    app.post('/gettingquestion', question.specificquestion)
    app.post('/answeringquestion', question.answerthequestion)
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })
}


// // You can use restful or semi restful routes for your application
// // Remember that we're dealing with angular which will take care 
// // of rendering static pages for us so some of these routes might 
// // be unnecessary

// // The edit and new route might not be necessary. You will only need 
// // these routes if the data you are retrieving is different than the 
// // data you retrieve for show, angular will take care of displaying 
// // static pages like new in the front end

// // FUll RESTFUL
// // get "/users" => UsersController index => grab all users
// // get "/users/:id" => UsersController show => grab one user
// // get "/users/:id/edit" => UsersController edit => show edit user page
// // get "/users/new" => UsersController new => show new user page
// // post "/users" => UsersController create => create a user
// // patch/put "/users/:id" => UsersController update => update a user
// // delete "/users/:id" => UsersController destroy => destroy a user

// // SEMI RESTFUL -- look at destroy and update methods
// // get "/users" => UsersController index => grab all users
// // get "/users/:id" => UsersController show => grab one user
// // get "/users/:id/edit" => UsersController edit => show edit user page
// // get "/users/new" => UsersController new => show new user page
// // post "/users" => UsersController create => create a user
// // post "/users/:id/update" => UsersController update => update a user
// // post "/users/:id/destroy" => UsersController destroy => destroy a user
