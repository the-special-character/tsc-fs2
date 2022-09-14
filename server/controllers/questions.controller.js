const QuestionBank = require("../models/questionBank.modal");

class Questions {
//   static getQuestion = async (req, res) => {
//     try {
//       const Question = new QuestionBank(req.body);
//       const saveQuestion = await newQuestion.save();
//       res.send(saveQuestion);
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   };

  static addQuestion = async (req, res) => {
    try {
      const newQuestion = new QuestionBank(req.body);
      const saveQuestion = await newQuestion.save();
      res.send(saveQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
