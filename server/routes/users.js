const express = require("express");
const userController = require("../controllers/user.controller");
const validation = require("../middleware/validation.middleware");
const userSchema = require("../validationSchema/user");

const router = express.Router();

router.post("/", validation(userSchema), userController.register);

module.exports = router;
