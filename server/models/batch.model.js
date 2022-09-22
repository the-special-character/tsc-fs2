const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const validateEmail = email => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return re.test(email);
};

const batchSchema = new Schema({
  email: {
    type: String,
    required: 'Email address is required',
    validate: [
      validateEmail,
      'Please fill a valid email address',
    ],
  },
  batchName: { type: String, require: true },
  batchDuration: { type: String, require: true },
  startDate: { type: String, require: true },
  sessionTime: { type: String, require: true },
  strengthOfStudent: { type: String, require: true },
  tutor: { type: String, require: true },
  course: { type: String, require: true },
});

const batchModel = model('batch', batchSchema);

module.exports = batchModel;
