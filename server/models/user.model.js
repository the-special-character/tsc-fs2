const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return re.test(email);
};

const Userschema = new Schema(
  {
    firstName: {
      type: String,
      required: `Please enter firstname`,
    },
    lastName: { type: String, required: `Please enter lastname` },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, `Please enter the proper email`],
    },
    PhoneNumber: { type: String },
    password: { type: String, required: `Please enter password` },
  },
  { timestamps: true }
);

const userBank = model("users", Userschema);

module.exports = userBank;
