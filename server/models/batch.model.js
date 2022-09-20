const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const batchSchema = new Schema({
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
