const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const validateEmail = email => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    required: 'Email address is required',
    validate: [
      validateEmail,
      'Please fill a valid email address',
    ],
  },
  password: { type: String, required: true },
  phonenumber: { type: String },
});

const usermodel = model('users', userSchema);

module.exports = usermodel;
