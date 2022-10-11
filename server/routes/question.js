const express = require('express');
const questionsController = require('../controllers/questions.controller');
const auth = require('../middleware/auth.middleware');

const validation = require('../middleware/validation.middleware');
const questionsSchema = require('../validationSchema/questions');

const router = express.Router();

router.get('/', auth, questionsController.getQuestions);

router.get('/:id', questionsController.getQuestion);

router.post(
  '/',
  validation(questionsSchema),
  questionsController.addQuestion,
);

router.patch('/:id', questionsController.updateQuestion);

router.delete('/:id', () => {});

module.exports = router;
