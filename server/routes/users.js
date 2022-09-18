const express = require("express");
const userController = require("../controllers/user.controller");
const validation = require("../middleware/validation.middleware");
const userSchema = require("../validationSchema/user");
const loginSchema = require("../validationSchema/login");

const router = express.Router();

router.post("/", validation(userSchema), userController.register);

router.post("/login", validation(loginSchema), userController.login);
module.exports = router;
