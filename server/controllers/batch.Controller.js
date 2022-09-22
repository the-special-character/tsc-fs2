const batchModel = require("../models/batch.model");
const ResponseWrapper = require("../helper/responceWrapper");

class Batch {
  static getallBatch = async (req, res) => {
    const resWrapper = new ResponseWrapper(res);
    try {
      const batchQuery = {};
      const keys = Object.keys(req.query);

      for (let i = 0; i < keys.length; i += 1) {
        const element = keys[i];
        batchQuery[element] = req.query[element];
      }

      const batch = await batchModel.find(batchQuery);
      resWrapper.ok(batch);
    } catch (error) {
      resWrapper.internalError(error.message);
    }
  };

  static addBatch = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const newBatch = new batchModel(req.body);

      const savedBatch = await newBatch.save();
      rw.created(savedBatch);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getBatch = async (req, res) => {
    try {
      const { batchName } = req.params;
      const batch = await batchModel.findById(batchName);
      if (batch === null) {
        throw new Error("Record not exist");
      }
      res.send(batch);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static updateBatch = async (res, req) => {
    try {
      const { batchName } = req.params;

      const updatedRecord = await batchModel.findByIdAndUpdate(
        batchName,
        req.body,
        {
          new: true,
        }
      );

      res.send(updatedRecord);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Batch;
