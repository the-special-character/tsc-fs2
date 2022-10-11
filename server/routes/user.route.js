const express = require('express');
const passport = require('passport');
const UserController = require('../controllers/users.controller');
const validation = require('../middleware/validation.middleware');
const {
  registerValidationSchema,
} = require('../validationSchema/user');

const router = express.Router();

router.post('/local', UserController.login);

router.get('/google', passport.authenticate('google'));

router.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.send('success');
  },
);

router.post(
  '/register',
  validation(registerValidationSchema),
  UserController.register,
);

module.exports = router;
