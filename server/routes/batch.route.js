const express = require('express');

const batchController = require('../controllers/batch.controller');
const validation = require('../middleware/validation.middleware');
const batchSchema = require('../validationSchema/batchSchema');

const router = express.Router();

router.get('/:id', batchController.getBatch);
router.get('/', batchController.getBatches);

router.post(
  '/',
  validation(batchSchema),
  batchController.addBatch,
);

router.patch('/:id', batchController.updateBatch);

router.delete('/:id', batchController.deleteBatch);

module.exports = router;
