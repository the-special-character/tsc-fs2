const express = require('express');
const UserController = require('../controllers/users.controller');
const validation = require('../middleware/Validate.miidlleware');
const {
  loginValidationSchema,
  registerValidationSchema,
} = require('../validationschema/user');

const router = express.Router();

router.post(
  '/login',
  validation(loginValidationSchema),
  UserController.login,
);

router.post(
  '/register',
  validation(registerValidationSchema),
  UserController.register,
);

module.exports = router;
