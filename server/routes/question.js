const express = require("express");
const questionsController = require("../controllers/questions.controller");
const router = express.Router();

router.get("/", questionsController.getQuestion);

router.post("/", questionsController.addQuestion);

router.put("/:id", () => {});

router.delete("/:id", () => {});

module.exports = router;
