const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return re.test(email);
};

const Userschema = new Schema(
  {
    FirstName: {
      type: String,
      required: `Please enter firstname`,
    },
    LastName: { type: String, required: `Please enter lastname` },
    Email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, `Please enter the proper email`],
    },
    PhoneNumber: { type: String },
    Password: { type: String, required: `Please enter password` },
  },
  { timestamps: true }
);

const UserList = model("Users", Userschema);

module.exports = UserList;
