const QuestionBank = require("../model/questionbank.model");

class Questions {
  static addQueation = async (req, res) => {
    try {
      const newQuestion = new QuestionBank(req.body);
      const saveQuestion = await newQuestion.save();
      res.send(saveQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getAllQuestion = async (req, res) => {
    try {
      const allquestions = await QuestionBank.find();
      res.send(allquestions);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const Aquestion = await QuestionBank.findById(id);
      res.send(Aquestion);
      if (Aquestion === null) {
        throw new Error("requested data do not exist.....");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getRequiredQuestion = async (req, res) => {
    try {
      const key = Object.keys(req.query);
      console.log(key);
      const searchdata = {};
      for (let i = 0; i < key.length; i += 1) {
        const element = key[i];
        searchdata[element] = req.query[element];
      }

      const requireddata = await QuestionBank.find(searchdata);
      res.send(requireddata);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static updateQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = await QuestionBank.findOneAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static deleteQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      await QuestionBank.findByIdAndDelete(id);
      res.send(`Deleted succesfully`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Questions;
