const QuestionBank = require("../models/questionBank.modal");

class Questions {
  static getQuestion = async (req, res) => {
    try {
      const searchQuery = {};
      const keys = Object.keys(req.query);
      for (let i = 0; i < keys.length; i += 1) {
        const element = keys[i];
        searchQuery[element] = req.query[element];
      }

      const Questions = await QuestionBank.find(searchQuery);
      res.send(Question);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static addQuestion = async (req, res) => {
    try {
      const newQuestion = new QuestionBank(req.body);
      const saveQuestion = await newQuestion.save();
      res.send(saveQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  static updateQuestion = async (req, res) => {
    try {
      const { id } = req.params;

      const updateRecord = await QuestionBank.findOneAndReplace(id, req.body);

      res.send(updateRecord);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
