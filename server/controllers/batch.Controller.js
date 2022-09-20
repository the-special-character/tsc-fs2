const batchModel = require("../models/batch.model");

const ResponseWrapper = require("../helper/responceWrapper");

class Batch {
  static getAllBatch = (req, res) => {
    const data = Object.keys(req.query);
    if (data.length === 0) {
      res.send(batch);
      return true;
    }

    const filteredRecord = batch.filter((x) => {
      let result = true;

      for (let i = 0; i < data.length; i += 1) {
        const element = data[i];
        result &&= x[element] === req.query[element];
      }
      return result;
    });

    res.send(filteredRecord);
    return true;
  };

  static getBatchByBatchName = (req, res) => {
    const { batchName } = req.params;
    const record = courses.find((course) => course.id === batchName);
    if (!record) {
      res.status(400).send("record not found");
    }
    res.send(record);
  };

  static updateBatch = (req, res) => {
    const { batchName } = req.params;

    const index = batch.findIndex((x) => x.batchName === batchName);

    if (index === -1) {
      res.status(400).send("record not found");
    }

    const updatedRecord = { ...req.body, batchName: batchName };

    batch.splice(index, 1, this.updatedRecord);

    res.send(updatedRecord);
  };

  static deleteBatch = (req, res) => {
    const { batchName } = req.params;

    const index = batch.findIndex((x) => x.batchName === batchName);

    batch.splice(index, 1);

    res.send("record deleted");
  };
}

module.exports = Batch;
