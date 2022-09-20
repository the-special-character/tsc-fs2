const mongoose = require("mongoose");
const config = require("config");

const { Schema, model } = mongoose;

const batchSchema = new Schema(
  {
    batchName: {
      type: String,
      required: "batch name is required",
    },
    BatchTime: {
      type: String,
      required: "batch time is required",
    },
    tutorName: {
      type: String,
      required: "tutor Name is required",
    },
    startDate: {
      type: String,
      required: "startDate is required",
    },
    courseName: {
      type: String,
      required: "Course name is required",
    },
    duration: {
      type: String,
      required: "duration is required",
    },
  },
  {
    timestamps: true,
  }
);

const batchModel = model("batch", batchSchema);

module.exports = batchModel;
