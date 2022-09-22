const mongoose = require("mongoose");
const config = require("config");

const { Schema, model } = mongoose;

const batchSchema = new Schema(
  {
    batchName: {
      type: String,
      required: true,
    },
    BatchTime: {
      type: String,
      required: true,
    },
    tutorName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    courseName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const batchModel = model("batch", batchSchema);

module.exports = batchModel;
