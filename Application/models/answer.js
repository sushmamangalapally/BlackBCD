var mongoose = require("mongoose");

var AnswerSchema = mongoose.Schema({
    content: String,
    details: String,
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    numberoflikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: {} })

mongoose.model('Answer', AnswerSchema);




