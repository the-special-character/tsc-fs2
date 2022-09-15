const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const questionBankSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const QuestionBank = model("questionBank", questionBankSchema);

module.exports = QuestionBank;
