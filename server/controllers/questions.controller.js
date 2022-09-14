const ResponseWrapper = require('../helper/responsewrapper');
const QuestionBank = require('../model/questionBank.model');

class Questions {
  static getQuestions = async (req, res) => {
    const resWrapper = new ResponseWrapper(res);

    try {
      // const { difficultyLevel, answer } = req.query;
      const searchQuery = {};

      const keys = Object.keys(req.query);
      for (let i = 0; i < keys.length; i += 1) {
        const element = keys[i];
        searchQuery[element] = req.query[element];
      }

      // if (difficultyLevel) {
      //   searchQuery.difficultyLevel = difficultyLevel;
      // }

      // if (answer) {
      //   searchQuery.answer = answer;
      // }

      const questions = await QuestionBank.find(
        searchQuery,
      );
      resWrapper.ok(questions);
      res.send(questions);
    } catch (error) {
      resWrapper.internalError(error.message);
    }
  };

  static getQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await QuestionBank.findById(id);
      if (question === null) {
        throw new Error('Record not found');
      }
      res.send(question);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static addQuestion = async (req, res) => {
    try {
      // save on local machine
      const newQuestion = new QuestionBank(req.body);
      // to save on db
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
        await QuestionBank.findOneAndUpdate(id, req.body, {
          new: true,
        });

      res.send(updatedRecord);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static deleteQuestion = async (req, res) => {
    try {
      const { id } = req.params;

      const deleteRecord =
        await QuestionBank.findByIdAndDelete(id, req.body);

      res.send(deleteRecord);
      console.log('Record Deleted...');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
