const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;


const QuestionSchema = new Schema({
   value: Number,
   question: String,
   answer: String
});

const CategorySchema = new Schema({
    name: String,
    questions: [QuestionSchema]
});

const GameSchema = new Schema({
    user: String,
    points: Number,
    board: [Boolean],
    categories: [CategorySchema]
});


GameSchema.pre('save', function(next){
    const emptyBoard = [
        false, false, false, false, false, false, 
        false, false, false, false, false, false, 
        false, false, false, false, false, false, 
        false, false, false, false, false, false, 
        false, false, false, false, false, false, 
    ];
    this.board = emptyBoard;
    next();
})


let GameModel = mongoose.model("Game", GameSchema);
let CategoryModel = mongoose.model("Category", CategorySchema);
let QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = {
    Game: GameModel,
    Category: CategoryModel,
    Question: QuestionModel
};