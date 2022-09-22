const express = require('express');
const batchContoller = require('../controllers/batchcontroller');
const validation = require('../middleware/Validate.miidlleware');
const batchValidationSchema = require('../validationschema/batch');

const router = express.Router();

router.get('/', batchContoller.getBatches);

router.get('/:id', batchContoller.getBatch);

router.post(
  '/',
  validation(batchValidationSchema),
  batchContoller.addBatch,
);

module.exports = router;
