const express = require("express");
const BatchController = require("../controllers/batch.Controller");
const validation = require("../middleware/validation.middleware");
const batchSchema = require("../validationSchema/batch");

const router = express.Router();

router.post("/", validation(batchSchema), BatchController.addBatch);
router.get("/:batchName", BatchController.getBatch);
router.patch("/:batchName", BatchController.updateBatch);
router.get("/", BatchController.getallBatch);

module.exports = router;
