const BatchModel = require('../models/batch.model');

const ResponseWrapper = require('../helper/responseWrapper');
const batchModel = require('../models/batch.model');

class BatchController {
  // post/////

  static batchInfo = async (req, res) => {
    const rw = new ResponseWrapper(res);

    try {
      const batch = new BatchModel(req.body);
      const savedBatch = await batch.save();
      rw.created(savedBatch);
    } catch (error) {
      rw.internalError('error');
    }
  };
  // put

  static updateBatch = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const { id } = req.params;
      const updatedBatchInfo =
        await batchModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      res.send(updatedBatchInfo);
    } catch (error) {
      rw.internalError('internal error');
    }
  };
  // delete

  static deleteBatchInfo = async (req, res) => {
    const rw = new ResponseWrapper(res);

    try {
      const { id } = req.params;
      const deleteBatchInfo =
        await BatchModel.findByIdAndDelete(id, req.body);
      res.send(deleteBatchInfo);
    } catch (error) {
      rw.internalError('internal error occurs');
    }
  };
}

module.exports = BatchController;
