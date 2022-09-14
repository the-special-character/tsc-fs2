const ResponseWrapper = require('../helper/responceWrapper');
const QuestionBank = require('../models/questionBank.model');

class Questions {
  static getQuestions = async (req, res) => {
    const resWrapper = new ResponseWrapper(res);
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

      resWrapper.ok(questions);
    } catch (error) {
      resWrapper.internalError(error.message);
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
      const newQuestion = new QuestionBank(req.body);
      const savedQuestion = await newQuestion.save();
      res.send(savedQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static updateQuestion = async (req, res) => {
    try {
      const { id } = req.params;

      const updatedRecord =
        await QuestionBank.findByIdAndUpdate(id, req.body, {
          new: true,
        });

      res.send(updatedRecord);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
