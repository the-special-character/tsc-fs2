const express = require('express');

const BatchController = require('../controllers/batchcontroller');

const router = express.Router();

router.post('/batchInfo', BatchController.batchInfo);

module.exports = router;
