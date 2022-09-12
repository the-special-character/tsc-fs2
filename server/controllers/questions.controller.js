const QuestionBank = require('../models/questionBank.model');

class Questions {
  static getQuestions = async (req, res) => {
    try {
      const questions = await QuestionBank.find();
      res.send(questions);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static addQuestion = async (req, res) => {
    try {
      const newQuestion = new QuestionBank(req.body);
      const savedQuestion = await newQuestion.save();
      res.send(savedQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
