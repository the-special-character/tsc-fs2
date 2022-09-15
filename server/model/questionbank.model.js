const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const optionschema = new Schema({
//     id: Number,
//     text: String
// })

const questionbankschema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    option: { type: [String], required: true },
    answer: { type: String, required: true },
    difficultylevel: {
      type: String,
      enum: ["low", "moderate", "novice"],
      default: "low",
    },
    hint: String,
  },
  { timestamps: true }
);

const QuestionBank = model("Qbank", questionbankschema);

module.exports = QuestionBank;
