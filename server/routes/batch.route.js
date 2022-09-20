const express = require("express");
const BatchController = require("../controllers/batch.Controller");
const validation = require("../middleware/validation.middleware");
const batchSchema = require("../validationSchema/batch");
const usersRoute = require("./user.route");

const router = express.Router();

router.post("/", validation(batchSchema), BatchController.getAllBatch);
router.get("/:batchName", BatchController.getBatchByBatchName);
router.patch("/:batchName", BatchController.updateBatch);
router.delete("/:batchName", BatchController.deleteBatch);

module.exports = router;
