const express = require("express");

const questionController = require("../controllers/question.control");

const router = express.Router();
const questionvalidator = require("../Validation/question.validation");
const validation = require("../middleware/validator");

router.post("/", validation(questionvalidator), questionController.addQueation);
router.get("/all", questionController.getAllQuestion);
router.get("/:id", questionController.getQuestion);
router.get("/", questionController.getRequiredQuestion);
router.put("/:id", questionController.updateQuestion);
router.delete("/:id", questionController.deleteQuestion);

module.exports = router;