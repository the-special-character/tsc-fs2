const ResponseWrapper = require('../helper/responseWrapper');
const BatchModel = require('../models/batch.model');

class BatchController {
  static addBatch = async (req, res) => {
    try {
      const newQuestion = new BatchModel(req.body);
      const savedQuestion = await newQuestion.save();
      res.send(savedQuestion);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getBatches = async (req, res) => {
    const resWrapper = new ResponseWrapper(res);
    try {
      const searchQuery = {};
      const keys = Object.keys(req.query);

      for (let i = 0; i < keys.length; i += 1) {
        const element = keys[i];
        searchQuery[element] = req.query[element];
      }

      const questions = await BatchModel.find(
        searchQuery,
      ).populate('tutor');

      resWrapper.ok(questions);
    } catch (error) {
      resWrapper.internalError(error.message);
    }
  };

  static getBatch = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await BatchModel.findById(id);
      if (question === null) {
        throw new Error('Record not exist');
      }
      res.send(question);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = BatchController;
