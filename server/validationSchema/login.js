const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(16).uppercase(1).lowercase().required(),
});

module.exports = loginSchema;