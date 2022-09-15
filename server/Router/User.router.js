const express = require("express");

const UserProgram = require("../controllers/User.controllers");
const validation = require("../middleware/validator");
const UserValidator = require("../Validation/UserValidation");

const router = express.Router();

router.post("/", validation(UserValidator), UserProgram.addUser);
router.get("/", UserProgram.getAllUser);
router.put("/:id", UserProgram.updateUser);
router.delete("/:id", UserProgram.deleteUser);

module.exports = router;
