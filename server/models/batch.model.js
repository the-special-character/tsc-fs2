const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const BatchSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    batchStartDate: Date,
    batchEndDate: Date,
    duration: Number,
    sessionTime: Date,
    tutor: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const BatchModel = model('batch', BatchSchema);

module.exports = BatchModel;
