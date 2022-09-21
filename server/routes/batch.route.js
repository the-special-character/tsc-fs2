const express = require('express');
const batchContoller = require('../controllers/batch.controller');
const validation = require('../middleware/validation.middleware');
const batchValidationSchema = require('../validationSchema/batch');

const router = express.Router();

router.get('/', batchContoller.getBatches);

router.get('/:id', batchContoller.getBatch);

router.post(
  '/',
  validation(batchValidationSchema),
  batchContoller.addBatch,
);

module.exports = router;
