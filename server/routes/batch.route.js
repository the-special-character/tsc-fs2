const express = require('express');

const BatchController = require('../controllers/batchcontroller');

const router = express.Router();

router.post('/batchInfo', BatchController.batchInfo);
router.put('/:id', BatchController.updateBatch);
router.delete('/:id', BatchController.deleteBatchInfo);

module.exports = router;
