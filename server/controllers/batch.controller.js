const BatchModel = require('../model/batch.model');

const ResponseWrapper = require('../helper/responsewrapper');

class Batch {
  static getBatch = async (req, res) => {
    try {
      const { id } = req.params;
      const batch = await BatchModel.findById(id);
      if (batch === null) {
        throw new Error('Record not exist');
      }
      res.send(batch);
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

      const batches = await BatchModel.find(
        searchQuery,
      ).populate('tutor');

      resWrapper.ok(batches);
    } catch (error) {
      resWrapper.internalError(error.message);
    }
  };

  static addBatch = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const batch = new BatchModel(req.body);
      const savedBatch = await batch.save();
      rw.created(savedBatch);
    } catch (error) {
      rw.internalError(error.message);
    }
  };

  static updateBatch = async (req, res) => {
    try {
      const { id } = req.params;

      const updatedBatch =
        await BatchModel.findOneAndUpdate(id, req.body, {
          new: true,
        });

      res.send(updatedBatch);
      console.log('Batch Updated');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static deleteBatch = async (req, res) => {
    try {
      const { id } = req.params;

      const deleteBatch =
        await BatchModel.findByIdAndDelete(id, req.body);

      res.send(deleteBatch);
      console.log('Batch Deleted...');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

module.exports = Batch;
