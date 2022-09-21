const Joi = require('joi');

const batchSchema = Joi.object({
  name: Joi.string().min(3).required(),
  batchStartDate: Joi.date(),
  batchEndDate: Joi.date(),
  duration: Joi.number(),
  sessionTime: Joi.date(),
  tutor: Joi.array().items(Joi.string()).min(1),
});

module.exports = batchSchema;
