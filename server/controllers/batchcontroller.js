const BatchModel = require('../models/batch.model');

const ResponseWrapper = require('../helper/responseWrapper');

class BatchController {
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
}

module.exports = BatchController;
