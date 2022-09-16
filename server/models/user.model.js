const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const validateEmail = email =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email,
  );

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: 'first name is required',
    },
    lastName: {
      type: String,
      required: 'last name is required',
    },
    email: {
      type: String,
      unique: true,
      required: 'Email address is required',
      validate: [
        validateEmail,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: 'last name is required',
    },
    mobile: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('users', userSchema);
