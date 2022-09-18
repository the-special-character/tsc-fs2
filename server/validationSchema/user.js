const Joi = require("joi");

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(3).max(16).uppercase(1).lowercase().required(),
});

module.exports = userSchema;
