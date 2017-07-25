var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer')
module.exports = {
    allquestions: function(req, res){
        console.log("I am in controller of questions.js (server) in allquestions")
        Question.find({}, function(err, allquestions){
        if(err){
            console.log(err)
            res.json({error: true, errors: err})
        }
        else{
            console.log("in allquestions!")
            console.log(allquestions)
            res.json(allquestions)
        }
        })
    },

    addquestion: function(req, res){
        console.log("I am in controller of questions.js (server) in addquestion")
        console.log("Create method question controller", req.body.thequestion)
        var question = new Question({title: req.body.thequestion.title, description: req.body.thequestion.description })
        console.log(question)
        User.findOne({username: req.body.thequestion.userId}, function(err, user){
            console.log("found the user! yatyy", user)
            user.questions.push(question);
            question.save(function(err){
            user.save(function(err){
            if(err){
                res.status(401).json({error: "AHHHHH"})
            }
            else{
                Question.findOne({_id: question._id})
                .populate("userId")
                .exec(function(err, question){
                    res.json({question: question})
                })
            }
            
            })
            })
        })         
    },
    specificquestion: function(req, res){
        console.log("I am in controller of questions.js (server) in specificquestion")
        console.log("Create method question controller", req.body.questionid)
        console.log(req.body.questionid)
        Question.findOne({_id: req.body.questionid}, function(err, question){
            if(err){
                res.status(401).json({error: "AHHHHH"})
            }
            else{
                res.json({question: question})
            }            
        })
    },
    
    answerthequestion: function(req, res){
        console.log("I am in controller of questions.js (server) in addquestion")
        console.log("Create method question controller", req.body.answer)
        console.log(req.body.question)
        console.log(req.body.user)
        var answer = new Answer({title: req.body.answer.content, details: req.body.answer.details })
        Question.findOne({_id: req.body.question._id}, function(err, question){
            console.log("found the question! yatyy", question)
            question.useranswers.push(answer);
            answer.save(function(err){
            question.save(function(err){
            if(err){
                res.status(401).json({error: "AHHHHH"})
            }
            else{
                Question.findOne({_id: question._id})
                .populate("userId")
                .exec(function(err, question){
                    res.json({question: question})
                })
            }
            
            })
            })
        })            
    }

}