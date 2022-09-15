const express = require("express");
const questionsController = require("../controllers/questions.controller");
const router = express.Router();

router.get("/", questionsController.getQuestion);

router.post("/", questionsController.addQuestion);

router.put("/:id", questionsController.updateQuestion);

router.delete("/:id", () => {});

module.exports = router;
