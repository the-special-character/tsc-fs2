const Joi = require('joi');

const userSchema = Joi.object({
  firstname: Joi.string().min().required(),
  lastname: Joi.string().min().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(3)
    .max(14)
    .uppercase(1)
    .lowercase(2),
  phonenum: Joi.string(),
});

module.exports = userSchema;
