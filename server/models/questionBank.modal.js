const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// const optionSchema = new Schema({
//   id: Number,
//   text: String,
// });

const questionBankSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  difficultyLevel: {
    type: String,
    enum: ["low", "moderate", "novice"],
    default: "low",
  },
  hint: String,
});

const QuestionBank = model("questionBank", questionBankSchema);

module.exports = QuestionBank;
