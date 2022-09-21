const Joi = require('joi');

const registerValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(3)
    .max(16)
    .uppercase(1)
    .lowercase(1)
    .required(),
  mobile: Joi.string(),
  role: Joi.string(),
});

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(3)
    .max(16)
    .uppercase(1)
    .lowercase(1)
    .required(),
});

module.exports = {
  registerValidationSchema,
  loginValidationSchema,
};
