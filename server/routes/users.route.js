const express = require('express');
const passport = require('passport');

const userController = require('../controllers/users.controller');

// const validation = require('../middleware/validation.middleware');

// const questionSchema = require('../validationSchema/questionSchema');

const router = express.Router();

router.post('/register', userController.register);
router.get('/local', userController.login);
router.get('/google', passport.authenticate('google'));
router.get('/google/callback', passport.authenticate('google'),
    (req, res) => {
        res.send('success');
    }
);
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook'),
    (req, res) => {
        res.send('success');
    }
);

module.exports = router;
