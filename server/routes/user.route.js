const express = require("express");
const UserController = require("../controllers/users.controller");

const router = express.Router();

router.post("/login", UserController.login);

router.post("/register", UserController.register);

module.exports = router;
