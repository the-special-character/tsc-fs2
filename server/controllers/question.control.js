const ResponseWrapper = require("../helpers/responseWrapper");
const QuestionBank = require("../model/questionbank.model");

class Questions {
  static addQueation = async (req, res) => {
    const resp = new ResponseWrapper(res);
    try {
      const newQuestion = new QuestionBank(req.body);
      const saveQuestion = await newQuestion.save();
      return resp.OK(saveQuestion);
    } catch (error) {
      return resp.INVALID_INPUT(`ERROR`);
    }
  };

  static getAllQuestion = async (req, res) => {
    const resp = new ResponseWrapper(res);
    try {
      const allquestions = await QuestionBank.find();
      return resp.OK(allquestions);
    } catch (error) {
      return resp.INTERNAL_ERROR(`Cannot Fetch`);
    }
  };

  static getQuestion = async (req, res) => {
    const resp = new ResponseWrapper(res);
    try {
      const { id } = req.params;
      const Aquestion = await QuestionBank.findById(id);
      resp.OK(Aquestion);
      if (Aquestion === null) {
        throw new Error("requested data do not exist.....");
      }
    } catch (error) {
      resp.INVALID_INPUT("Invalid_Input ");
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
    const resp = new ResponseWrapper(res);
    try {
      const { id } = req.params;
      const updatedData = await QuestionBank.findOneAndUpdate(id, req.body, {
        new: true,
      });
      resp.UPDATED(updatedData);
    } catch (error) {
      resp.INVALID_INPUT(`INVALID_INPUT`);
    }
  };

  static deleteQuestion = async (req, res) => {
    const resp = new ResponseWrapper(res);
    try {
      const { id } = req.params;
      await QuestionBank.findByIdAndDelete(id);
      resp.DELETED(`Record deleted Succesfully`);
    } catch (error) {
      resp.INVALID_INPUT(`INVALID_INPUT`);
    }
  };
}

module.exports = Questions;
