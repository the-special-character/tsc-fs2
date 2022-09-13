const QuestionBank = require('../models/questionBank.model');

class Questions {
  static getQuestions = async (req, res) => {
    try {
      const searchQuery = {};
      const keys = Object.keys(req.query);
      for (let i = 0; i < keys.length; i += 1) {
        const element = keys[i];
        searchQuery[element] = req.query[element];
      }

      const questions = await QuestionBank.find(
        searchQuery,
      );

      res.send(questions);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await QuestionBank.findById(id);
      if (question === null) {
        throw new Error('Record not exist');
      }
      res.send(question);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static addQuestion = async (req, res) => {
    try {
      // local machine
      const newQuestion = new QuestionBank(req.body);
      //
      const savedQuestion = await newQuestion.save();
      res.send(savedQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
