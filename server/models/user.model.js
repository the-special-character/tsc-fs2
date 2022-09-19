const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const validEmail = (email) => {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
};
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: [validEmail, ""],
    unique: true,
  },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
});

const userModel = model("users", userSchema);

module.exports = userModel;
