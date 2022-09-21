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
      type: String,
      required: true,
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
  }
);

const batchModel = model("batch", batchSchema);

module.exports = batchModel;
