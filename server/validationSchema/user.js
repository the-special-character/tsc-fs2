const Joi = require("joi");

const questionSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email.required(),
  password: Joi.string().min(3).max(16).uppercase(1).lowecase().required(),
});

module.exports = userSchema;
