var mongoose = require("mongoose");

var QuestionSchema = mongoose.Schema({
    title: String,
    description: String,
    answers: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    useranswers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
}, { timestamps: {} })

mongoose.model('Question', QuestionSchema);




