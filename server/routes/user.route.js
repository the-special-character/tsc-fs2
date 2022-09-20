const express = require("express");
const UserController = require("../controllers/users.controller");
const validation = require("../middleware/validation.middleware");
const userSchema = require("../validationSchema/users");
const loginSchema = require("../validationSchema/login");

const router = express.Router();

router.post("/register", validation(userSchema), UserController.register);

router.post("/login", validation(loginSchema), UserController.login);

module.exports = router;
