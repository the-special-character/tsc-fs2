const joi = require("joi");

const userSchema = joi.object({
  FirstName: joi.string().required(),
  LastName: joi.string().required(),
  Email: joi.string().email().required(),
  PhoneNumber: joi.number().required(),
  Password: joi.string().min(3).max(16).uppercase(1).lowercase(1).required(),
});

module.exports = userSchema;
