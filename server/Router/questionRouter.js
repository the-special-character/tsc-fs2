const express = require("express");

const questionController = require("../controllers/question.control");


const router = express.Router();

router.get("/", questionController.addQueation);



module.exports = router;
