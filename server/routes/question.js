const express = require('express');
const questionController = require('../controllers/questions.controller');

const validation = require('../middleware/validation.middleware');
const questionSchema = require('../validationSchema/questionSchema');

const router = express.Router();

router.get('/', questionController.getQuestions);

router.get('/:id', questionController.getQuestion);

router.post(
  '/',
  validation(questionSchema),
  questionController.addQuestion,
);

router.patch('/:id', questionController.updateQuestion);

router.delete('/:id', questionController.deleteQuestion);

module.exports = router;
