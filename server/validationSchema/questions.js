const Joi = require("joi");

const questionSchema = Joi.object({
  question: Joi.string().min(3).required(),
  options: Joi.array().items(Joi.string(), Joi.number()).min(4).required(),
  answer: Joi.string().required(),
  difficultyLevel: Joi.string().valid("low", "moderate", "novice"),
});

module.exports = questionSchema;
