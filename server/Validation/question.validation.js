const Joi = require("joi");

const questionValidation = Joi.object({
  question: Joi.string().min(3).required(),
  option: Joi.array().items(Joi.string(), Joi.number()).length(4).required(),
  answer: Joi.string().required(),
  difficultylevel: Joi.string().valid("low", "moderate", "novice"),
  hint: Joi.string(),
});
module.exports = questionValidation;
