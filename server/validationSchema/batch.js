const Joi = require("joi");

const batchSchema = Joi.object({
  batchName: Joi.string().required(),
  BatchTime: Joi.array().required(),
  tutorName: Joi.string().required(),
  startDate: Joi.string().required(),
  courseName: Joi.string().required(),
  duration: Joi.string().required(),
});

module.exports = batchSchema;
